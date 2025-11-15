import { z } from 'zod';

export const OfflineConversionServiceDownloadSelector = z.object({
  accountId: z.number().int().nullable(),
  uploadId: z.number().int().nullable()
}).nullable();

export type OfflineConversionServiceDownloadSelector = z.infer<typeof OfflineConversionServiceDownloadSelector>;
