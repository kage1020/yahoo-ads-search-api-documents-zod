import { z } from 'zod';

export const OfflineConversionServiceSortField = z.enum(["UPLOAD_ID", "UPLOAD_FILE_NAME", "PROCESS_STATUS", "UPLOADED_DATE", "UPLOAD_TYPE", "UNKNOWN"]).nullable();

export type OfflineConversionServiceSortField = z.infer<typeof OfflineConversionServiceSortField>;
