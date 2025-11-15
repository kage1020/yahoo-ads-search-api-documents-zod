import { z } from 'zod';

export const conversionTrackerServiceMarkupLanguage = z.enum(["HTML", "CHTML", "XHTML", "WML", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceMarkupLanguage = z.infer<typeof conversionTrackerServiceMarkupLanguage>;
