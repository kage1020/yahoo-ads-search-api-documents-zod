import { z } from 'zod';

import { OfflineConversionServiceUploadType } from './OfflineConversionServiceUploadType';
import { OfflineConversionServiceUploadSourceType } from './OfflineConversionServiceUploadSourceType';
import { OfflineConversionServiceProcessStatus } from './OfflineConversionServiceProcessStatus';

export const OfflineConversionFile = z.object({
  accountId: z.number().int().nullable(),
  uploadId: z.number().int().nullable(),
  uploadFileName: z.string().nullable(),
  uploadType: OfflineConversionServiceUploadType,
  uploadedDate: z.string().nullable(),
  uploadSourceType: OfflineConversionServiceUploadSourceType,
  processStatus: OfflineConversionServiceProcessStatus
}).nullable();

export type OfflineConversionFile = z.infer<typeof OfflineConversionFile>;
