import { z } from 'zod';

export const CampaignWebpageServiceWebpageConditionType = z.enum(["URL", "PAGE_TITLE", "PAGE_CONTENT", "CUSTOM_LABEL", "ALL_PAGES", "UNKNOWN"]).nullable();

export type CampaignWebpageServiceWebpageConditionType = z.infer<typeof CampaignWebpageServiceWebpageConditionType>;
