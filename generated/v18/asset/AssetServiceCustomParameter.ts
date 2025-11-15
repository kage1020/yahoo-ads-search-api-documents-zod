import { z } from 'zod';

export const AssetServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AssetServiceCustomParameter = z.infer<typeof AssetServiceCustomParameter>;
