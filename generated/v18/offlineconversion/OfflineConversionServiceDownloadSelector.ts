import { z } from 'zod';

export const offlineConversionServiceDownloadSelector = z.object({
  accountId: z.number().int().nullable(),
  uploadId: z.number().int().nullable()
}).nullable();

export type OfflineConversionServiceDownloadSelector = z.infer<typeof offlineConversionServiceDownloadSelector>;
