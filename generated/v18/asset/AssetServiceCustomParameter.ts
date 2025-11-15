import { z } from 'zod';

export const assetServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AssetServiceCustomParameter = z.infer<typeof assetServiceCustomParameter>;
