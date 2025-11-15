import { z } from 'zod';

export const AssetServiceSetTrademarkStatus = z.object({
  assetId: z.number().int().nullable()
}).nullable();

export type AssetServiceSetTrademarkStatus = z.infer<typeof AssetServiceSetTrademarkStatus>;
