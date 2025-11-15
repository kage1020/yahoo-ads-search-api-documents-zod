import { z } from 'zod';

export const AdGroupWebpageServiceWebpageConditionType = z.enum(["URL", "PAGE_TITLE", "PAGE_CONTENT", "CUSTOM_LABEL", "ALL_PAGES", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceWebpageConditionType = z.infer<typeof AdGroupWebpageServiceWebpageConditionType>;
