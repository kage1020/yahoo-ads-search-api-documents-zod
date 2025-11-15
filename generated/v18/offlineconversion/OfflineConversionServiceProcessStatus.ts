import { z } from 'zod';

export const offlineConversionServiceProcessStatus = z.enum(["PROCESSING", "DONE", "DONE_WITH_ERROR", "ERROR", "UNKNOWN"]).nullable();

export type OfflineConversionServiceProcessStatus = z.infer<typeof offlineConversionServiceProcessStatus>;
