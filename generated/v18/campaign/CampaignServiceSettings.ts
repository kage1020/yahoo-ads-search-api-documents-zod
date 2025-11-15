import { z } from 'zod';

import { CampaignServiceDynamicAdsForSearchSetting } from './CampaignServiceDynamicAdsForSearchSetting';
import { CampaignServiceGeoTargetTypeSetting } from './CampaignServiceGeoTargetTypeSetting';
import { CampaignServiceSettingType } from './CampaignServiceSettingType';
import { CampaignServiceTargetingSetting } from './CampaignServiceTargetingSetting';

export const CampaignServiceSettings = z.object({
  dynamicAdsForSearchSetting: CampaignServiceDynamicAdsForSearchSetting,
  geoTargetTypeSetting: CampaignServiceGeoTargetTypeSetting,
  settingType: CampaignServiceSettingType,
  targetingSetting: CampaignServiceTargetingSetting
}).nullable();

export type CampaignServiceSettings = z.infer<typeof CampaignServiceSettings>;
