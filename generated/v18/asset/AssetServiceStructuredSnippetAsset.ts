import { z } from 'zod';

export const assetServiceStructuredSnippetAsset = z.object({
  header: z.string().nullable(),
  reviewHeader: z.string().nullable(),
  values: z.array(z.string().nullable()).nullable(),
  reviewValues: z.array(z.string().nullable()).nullable()
}).nullable();

export type AssetServiceStructuredSnippetAsset = z.infer<typeof assetServiceStructuredSnippetAsset>;
