import { z } from 'zod';

export const assetServiceSetTrademarkStatus = z.object({
  assetId: z.number().int().nullable()
}).nullable();

export type AssetServiceSetTrademarkStatus = z.infer<typeof assetServiceSetTrademarkStatus>;
