import { z } from 'zod';

import { campaignServiceDynamicAdsForSearchSetting } from './CampaignServiceDynamicAdsForSearchSetting';
import { campaignServiceGeoTargetTypeSetting } from './CampaignServiceGeoTargetTypeSetting';
import { campaignServiceSettingType } from './CampaignServiceSettingType';
import { campaignServiceTargetingSetting } from './CampaignServiceTargetingSetting';

export const campaignServiceSettings = z.object({
  dynamicAdsForSearchSetting: campaignServiceDynamicAdsForSearchSetting,
  geoTargetTypeSetting: campaignServiceGeoTargetTypeSetting,
  settingType: campaignServiceSettingType,
  targetingSetting: campaignServiceTargetingSetting
}).nullable();

export type CampaignServiceSettings = z.infer<typeof campaignServiceSettings>;
