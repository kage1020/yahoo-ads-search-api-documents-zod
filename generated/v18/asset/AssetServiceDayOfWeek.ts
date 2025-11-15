import { z } from 'zod';

export const AssetServiceDayOfWeek = z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "UNKNOWN"]).nullable();

export type AssetServiceDayOfWeek = z.infer<typeof AssetServiceDayOfWeek>;
