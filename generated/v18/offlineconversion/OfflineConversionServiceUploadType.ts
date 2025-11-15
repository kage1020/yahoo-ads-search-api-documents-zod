import { z } from 'zod';

export const offlineConversionServiceUploadType = z.enum(["NEW", "ADJUSTMENT", "UNKNOWN"]).nullable();

export type OfflineConversionServiceUploadType = z.infer<typeof offlineConversionServiceUploadType>;
