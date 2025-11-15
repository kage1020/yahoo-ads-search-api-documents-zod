import { z } from 'zod';

export const assetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type AssetServiceDayOfWeek = z.infer<typeof assetServiceDayOfWeek>;
