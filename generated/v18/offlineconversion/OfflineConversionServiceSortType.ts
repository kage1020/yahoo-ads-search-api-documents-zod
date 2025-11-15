import { z } from 'zod';

export const OfflineConversionServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type OfflineConversionServiceSortType = z.infer<typeof OfflineConversionServiceSortType>;
