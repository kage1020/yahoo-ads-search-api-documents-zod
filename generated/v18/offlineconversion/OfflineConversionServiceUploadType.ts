import { z } from 'zod';

export const OfflineConversionServiceUploadType = z.enum(["NEW", "ADJUSTMENT", "UNKNOWN"]).nullable();

export type OfflineConversionServiceUploadType = z.infer<typeof OfflineConversionServiceUploadType>;
