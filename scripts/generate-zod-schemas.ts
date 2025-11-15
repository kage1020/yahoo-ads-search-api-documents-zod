import * as fs from "fs"
import * as yaml from "js-yaml"
import * as path from "path"

interface YamlSchema {
  [key: string]: {
    type?: string
    nullable?: boolean
    enum?: string[]
    properties?: Record<string, any>
    items?: any
    $ref?: string
    format?: string
    title?: string
    description?: string
    minimum?: number
    maximum?: number
  }
}

interface GeneratedFile {
  inputPath: string
  outputPath: string
  schemaName: string
}

class ZodSchemaGenerator {
  private generatedFiles: GeneratedFile[] = []
  private processedRefs = new Set<string>()

  constructor(private sourceDir: string, private outputDir: string) {}

  generate(): void {
    console.log("Generating Zod schemas from OpenAPI YAML files...")

    // Clean output directory
    if (fs.existsSync(this.outputDir)) {
      fs.rmSync(this.outputDir, { recursive: true, force: true })
    }

    // Process common schemas first
    this.processCommonSchemas()

    // Process v18 schemas
    this.processDirectory(path.join(this.sourceDir, "v18"), "v18")

    // Generate index files
    this.generateIndexFiles()

    console.log(`Generated ${this.generatedFiles.length} schema files`)
  }

  private processCommonSchemas(): void {
    const commonFiles = [
      "Error.yaml",
      "ErrorDetail.yaml",
      "Response400.yaml",
      "Response401.yaml",
      "Response403.yaml",
      "Response500.yaml",
      "Response503.yaml",
    ]

    for (const file of commonFiles) {
      const filePath = path.join(this.sourceDir, file)
      if (fs.existsSync(filePath)) {
        this.processYamlFile(filePath, "common")
      }
    }
  }

  private processDirectory(dirPath: string, relativePath: string = ""): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name)
      const relPath = relativePath
        ? path.join(relativePath, entry.name)
        : entry.name

      if (entry.isDirectory()) {
        this.processDirectory(fullPath, relPath)
      } else if (entry.isFile() && entry.name.endsWith(".yaml")) {
        this.processYamlFile(fullPath, relativePath)
      }
    }
  }

  private processYamlFile(filePath: string, relativePath: string): void {
    try {
      const content = fs.readFileSync(filePath, "utf8")
      const schema = yaml.load(content) as YamlSchema

      if (!schema || typeof schema !== "object") {
        console.warn(`Skipping ${filePath}: invalid schema`)
        return
      }

      const schemaName = Object.keys(schema)[0]
      const schemaContent = schema[schemaName]

      if (!schemaContent) {
        console.warn(`Skipping ${filePath}: no schema found`)
        return
      }

      const zodSchema = this.convertToZod(schemaContent)
      const outputPath = this.getOutputPath(filePath, relativePath)

      this.writeSchemaFile(
        outputPath,
        schemaName,
        zodSchema,
        filePath,
        relativePath
      )

      this.generatedFiles.push({
        inputPath: filePath,
        outputPath,
        schemaName,
      })
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
    }
  }

  private convertToZod(schema: any, depth: number = 0): string {
    if (depth > 10) {
      return "z.unknown()"
    }

    // Handle $ref
    if (schema.$ref) {
      return this.handleRef(schema.$ref)
    }

    // Handle type
    const type = schema.type
    const nullable = schema.nullable === true

    let zodType = ""

    if (type === "object") {
      zodType = this.convertObjectToZod(schema, depth)
    } else if (type === "array") {
      zodType = this.convertArrayToZod(schema, depth)
    } else if (type === "string") {
      zodType = this.convertStringToZod(schema)
    } else if (type === "integer" || type === "number") {
      zodType = this.convertNumberToZod(schema)
    } else if (type === "boolean") {
      zodType = "z.boolean()"
    } else {
      zodType = "z.unknown()"
    }

    // Apply nullable
    if (nullable) {
      zodType = `${zodType}.nullable()`
    }

    return zodType
  }

  private convertObjectToZod(schema: any, depth: number): string {
    if (!schema.properties) {
      return "z.object({})"
    }

    const properties = Object.entries(schema.properties)
      .map(([key, value]: [string, any]) => {
        const zodType = this.convertToZod(value, depth + 1)
        return `  ${key}: ${zodType}`
      })
      .join(",\n")

    return `z.object({\n${properties}\n})`
  }

  private convertArrayToZod(schema: any, depth: number): string {
    if (!schema.items) {
      return "z.array(z.unknown())"
    }

    const itemType = this.convertToZod(schema.items, depth + 1)
    return `z.array(${itemType})`
  }

  private convertStringToZod(schema: any): string {
    if (schema.enum) {
      const enumValues = schema.enum.map((v: string) => `"${v}"`).join(", ")
      return `z.enum([${enumValues}])`
    }
    return "z.string()"
  }

  private convertNumberToZod(schema: any): string {
    let zodType = "z.number()"

    if (schema.format === "int64" || schema.format === "int32") {
      zodType = "z.number().int()"
    }

    if (schema.minimum !== undefined) {
      zodType = `${zodType}.min(${schema.minimum})`
    }

    if (schema.maximum !== undefined) {
      zodType = `${zodType}.max(${schema.maximum})`
    }

    return zodType
  }

  private handleRef(ref: string): string {
    // ref format: 'FileName.yaml#/SchemaName'
    const match = ref.match(/(.+\.yaml)#\/(.+)/)
    if (!match) {
      return "z.unknown()"
    }

    const [, fileName, schemaName] = match
    // Use lowercase first letter for schema variable name
    const schemaVarName = schemaName.charAt(0).toLowerCase() + schemaName.slice(1)

    this.processedRefs.add(fileName)

    return schemaVarName
  }

  private getOutputPath(inputPath: string, relativePath: string): string {
    const fileName = path.basename(inputPath, ".yaml") + ".ts"

    if (relativePath === "common") {
      return path.join(this.outputDir, "common", fileName)
    }

    // Keep the version directory structure (e.g., v18/account)
    return path.join(this.outputDir, relativePath, fileName)
  }

  private writeSchemaFile(
    outputPath: string,
    schemaName: string,
    zodSchema: string,
    inputPath: string,
    relativePath: string
  ): void {
    const dir = path.dirname(outputPath)
    fs.mkdirSync(dir, { recursive: true })

    const imports = this.collectImports(inputPath, relativePath)
    const content = this.generateFileContent(schemaName, zodSchema, imports)

    fs.writeFileSync(outputPath, content, "utf8")
  }

  private collectImports(
    filePath: string,
    relativePath: string
  ): Map<string, string> {
    const content = fs.readFileSync(filePath, "utf8")
    const schema = yaml.load(content) as YamlSchema
    const imports = new Map<string, string>()

    const currentDir = path.dirname(filePath)

    const collectRefs = (obj: any): void => {
      if (!obj || typeof obj !== "object") return

      if (obj.$ref) {
        const match = obj.$ref.match(/(.+\.yaml)#\/(.+)/)
        if (match) {
          const [, refPath, schemaName] = match

          // Resolve the absolute path of the referenced file
          const refAbsolutePath = path.resolve(currentDir, refPath)

          // Determine the output path for the referenced file
          let refOutputPath: string

          // Check if it's a common schema (in design/ directory root)
          const refRelativeToDesign = path.relative(
            this.sourceDir,
            refAbsolutePath
          )
          if (
            !refRelativeToDesign.includes(path.sep) ||
            refRelativeToDesign.startsWith("..")
          ) {
            // It's a common schema
            refOutputPath = path.join(
              this.outputDir,
              "common",
              path.basename(refPath, ".yaml") + ".ts"
            )
          } else {
            // It's a version-specific schema
            const refRelativePath = path.relative(
              path.join(this.sourceDir, "v18"),
              refAbsolutePath
            )
            refOutputPath = path.join(
              this.outputDir,
              "v18",
              refRelativePath.replace(".yaml", ".ts")
            )
          }

          // Calculate the relative import path from current file to referenced file
          const currentOutputPath = this.getOutputPath(filePath, relativePath)
          const currentOutputDir = path.dirname(currentOutputPath)
          let importPath = path.relative(currentOutputDir, refOutputPath)

          // Remove .ts extension and ensure it starts with ./
          importPath = importPath.replace(/\.ts$/, "")
          if (!importPath.startsWith(".")) {
            importPath = "./" + importPath
          }

          imports.set(schemaName, importPath)
        }
      }

      for (const value of Object.values(obj)) {
        if (typeof value === "object") {
          collectRefs(value)
        }
      }
    }

    collectRefs(schema)
    return imports
  }

  private generateFileContent(
    schemaName: string,
    zodSchema: string,
    imports: Map<string, string>
  ): string {
    let content = `import { z } from 'zod';\n`

    if (imports.size > 0) {
      content += "\n"
      for (const [importName, importPath] of imports) {
        // Import only the schema variable (lowercase)
        const importVarName = importName.charAt(0).toLowerCase() + importName.slice(1)
        content += `import { ${importVarName} } from '${importPath}';\n`
      }
    }

    // Schema variable name with lowercase first letter
    const schemaVarName = schemaName.charAt(0).toLowerCase() + schemaName.slice(1)

    content += `\n`
    content += `export const ${schemaVarName} = ${zodSchema};\n`
    content += `\n`
    content += `export type ${schemaName} = z.infer<typeof ${schemaVarName}>;\n`

    return content
  }

  private generateIndexFiles(): void {
    // Generate index for each directory
    const directories = new Set<string>()

    for (const file of this.generatedFiles) {
      const dir = path.dirname(file.outputPath)
      directories.add(dir)
    }

    // Sort directories by depth (deepest first) to ensure child indices are generated first
    const sortedDirs = Array.from(directories).sort((a, b) => {
      const depthA = a.split(path.sep).length
      const depthB = b.split(path.sep).length
      return depthB - depthA
    })

    for (const dir of sortedDirs) {
      this.generateIndexFile(dir)
    }

    // Generate root index
    this.generateRootIndex()
  }

  private generateIndexFile(dir: string): void {
    const files = this.generatedFiles.filter(
      (f) => path.dirname(f.outputPath) === dir
    )

    // Also include subdirectories that have index.ts
    const subdirs = new Set<string>()
    for (const file of this.generatedFiles) {
      const fileDir = path.dirname(file.outputPath)
      if (fileDir.startsWith(dir + path.sep)) {
        const relativePath = path.relative(dir, fileDir)
        const firstPart = relativePath.split(path.sep)[0]
        if (firstPart) {
          subdirs.add(firstPart)
        }
      }
    }

    const exports: string[] = []

    // Export files in current directory
    for (const f of files) {
      const fileName = path.basename(f.outputPath, ".ts")
      exports.push(`export * from './${fileName}';`)
    }

    // Export subdirectories
    for (const subdir of subdirs) {
      exports.push(`export * from './${subdir}';`)
    }

    if (exports.length === 0) return

    const indexPath = path.join(dir, "index.ts")
    fs.writeFileSync(indexPath, exports.join("\n") + "\n", "utf8")
  }

  private generateRootIndex(): void {
    const services = new Set<string>()

    for (const file of this.generatedFiles) {
      const relativePath = path.relative(this.outputDir, file.outputPath)
      const parts = relativePath.split(path.sep)

      if (parts.length > 1) {
        services.add(parts[0])
      }
    }

    const exports = Array.from(services)
      .sort()
      .map((service) => `export * from './${service}';`)
      .join("\n")

    const indexPath = path.join(this.outputDir, "index.ts")
    fs.writeFileSync(indexPath, exports + "\n", "utf8")
  }
}

// Main execution
const sourceDir = path.join(__dirname, "..", "design")
const outputDir = path.join(__dirname, "..", "generated")

const generator = new ZodSchemaGenerator(sourceDir, outputDir)
generator.generate()
