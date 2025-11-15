import { z } from 'zod';

export const conversionTrackerServiceIsRemoveUrl = z.enum(["TRUE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceIsRemoveUrl = z.infer<typeof conversionTrackerServiceIsRemoveUrl>;
