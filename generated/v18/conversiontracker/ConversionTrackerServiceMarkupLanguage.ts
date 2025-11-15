import { z } from 'zod';

export const ConversionTrackerServiceMarkupLanguage = z.enum(["HTML", "CHTML", "XHTML", "WML", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceMarkupLanguage = z.infer<typeof ConversionTrackerServiceMarkupLanguage>;
