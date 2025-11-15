import { z } from 'zod';

export const campaignExportServiceEntityType = z.enum(["CAMPAIGN", "NEGATIVE_CAMPAIGN_CRITERION", "AD_GROUP", "BIDDABLE_AD_GROUP_CRITERION", "NEGATIVE_AD_GROUP_CRITERION", "AD", "ASSET", "QUICKLINK_ASSET", "CALLOUT_ASSET", "STRUCTURED_SNIPPET_ASSET", "CALLEXTENSION_ASSET", "IMAGE_ASSET", "FAVICON_ASSET", "ALL", "UNKNOWN"]).nullable();

export type CampaignExportServiceEntityType = z.infer<typeof campaignExportServiceEntityType>;
