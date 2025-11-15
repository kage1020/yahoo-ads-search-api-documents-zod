import { z } from 'zod';

export const assetServiceDownloadImageSelector = z.object({
  accountId: z.number().int(),
  assetId: z.number().int()
}).nullable();

export type AssetServiceDownloadImageSelector = z.infer<typeof assetServiceDownloadImageSelector>;
