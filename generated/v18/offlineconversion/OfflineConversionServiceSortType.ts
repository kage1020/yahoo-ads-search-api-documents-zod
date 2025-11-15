import { z } from 'zod';

export const offlineConversionServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type OfflineConversionServiceSortType = z.infer<typeof offlineConversionServiceSortType>;
