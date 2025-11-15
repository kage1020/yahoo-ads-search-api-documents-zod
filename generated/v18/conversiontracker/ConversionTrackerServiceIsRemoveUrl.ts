import { z } from 'zod';

export const ConversionTrackerServiceIsRemoveUrl = z.enum(["TRUE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceIsRemoveUrl = z.infer<typeof ConversionTrackerServiceIsRemoveUrl>;
