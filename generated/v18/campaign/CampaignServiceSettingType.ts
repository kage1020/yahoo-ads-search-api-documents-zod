import { z } from 'zod';

export const campaignServiceSettingType = z.enum(["GEO_TARGET_TYPE_SETTING", "TARGET_LIST_SETTING", "DYNAMIC_ADS_FOR_SEARCH_SETTING", "UNKNOWN"]).nullable();

export type CampaignServiceSettingType = z.infer<typeof campaignServiceSettingType>;
