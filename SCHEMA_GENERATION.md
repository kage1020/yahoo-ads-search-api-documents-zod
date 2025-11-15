# Zod Schema Generation

このプロジェクトでは、OpenAPI定義(YAML)からZodスキーマを自動生成します。

## セットアップ

依存関係をインストール:

```bash
npm install
```

## Zodスキーマの生成

v18のOpenAPI定義からZodスキーマを生成:

```bash
npm run generate
```

生成されたスキーマは`generated/`ディレクトリに出力されます。

## ディレクトリ構造

```
generated/
├── common/          # 共通エラースキーマなど
│   ├── Error.ts
│   ├── ErrorDetail.ts
│   └── ...
├── v18/            # v18 API スキーマ
│   ├── account/
│   │   ├── Account.ts
│   │   ├── AccountServiceStatus.ts
│   │   └── ...
│   ├── campaign/
│   ├── adgroup/
│   └── ...
└── index.ts        # すべてのエクスポート
```

## 使用方法

別のプロジェクトでこれらのスキーマを使用する場合:

### 1. 生成されたスキーマをコピー

```bash
# 生成されたスキーマを別プロジェクトにコピー
cp -r generated/ /path/to/your/project/src/schemas/
```

### 2. Zodをインストール

```bash
npm install zod
```

### 3. スキーマをインポートして使用

```typescript
import { Account } from './schemas/v18/account/Account';
import { AccountServiceStatus } from './schemas/v18/account/AccountServiceStatus';

// バリデーション
const accountData = {
  accountId: 123456789,
  accountName: 'My Account',
  accountStatus: 'SERVING',
  // ...
};

try {
  const validatedAccount = Account.parse(accountData);
  console.log('Valid account:', validatedAccount);
} catch (error) {
  console.error('Validation error:', error);
}

// 型推論
type AccountType = typeof Account._type;
// または
import type { Account as AccountType } from './schemas/v18/account/Account';
```

### 4. APIレスポンスのバリデーション例

```typescript
import { Account } from './schemas/v18/account/Account';
import { AccountServiceGetResponse } from './schemas/v18/account/AccountServiceGetResponse';

async function fetchAccount(accountId: number) {
  const response = await fetch(`/api/accounts/${accountId}`);
  const data = await response.json();

  // レスポンスをバリデーション
  const validatedResponse = AccountServiceGetResponse.parse(data);

  return validatedResponse;
}
```

## テスト

生成されたスキーマのテスト実行:

```bash
npm test
```

## スキーマの特徴

- **Enum型**: OpenAPIのenumはZodの`z.enum()`に変換
- **Nullable**: `nullable: true`のフィールドは`.nullable()`を付与
- **Array**: `type: array`は`z.array()`に変換
- **Object**: `type: object`は`z.object()`に変換
- **$ref**: 相対パスでインポート文を自動生成

## カスタマイズ

スキーマ生成ロジックをカスタマイズする場合は、[scripts/generate-zod-schemas.ts](scripts/generate-zod-schemas.ts)を編集してください。

## 注意事項

- 生成されたスキーマは`generated/`ディレクトリに出力されます
- 再生成すると既存のファイルは削除されます
- カスタマイズした内容は別ディレクトリに保存してください
