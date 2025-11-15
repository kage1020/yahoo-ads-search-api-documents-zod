import { z } from 'zod';

export const campaignServiceDasUseUrlsType = z.enum(["USE_SUPPLIED_URLS_ONLY", "TOP_DOMAIN_ONLY", "DOMAIN_AND_SUPPLIED_URLS", "UNKNOWN"]).nullable();

export type CampaignServiceDasUseUrlsType = z.infer<typeof campaignServiceDasUseUrlsType>;
