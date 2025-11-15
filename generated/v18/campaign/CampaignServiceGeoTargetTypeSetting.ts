import { z } from 'zod';

import { campaignServiceGeoTargetType } from './CampaignServiceGeoTargetType';

export const campaignServiceGeoTargetTypeSetting = z.object({
  negativeGeoTargetType: campaignServiceGeoTargetType,
  positiveGeoTargetType: campaignServiceGeoTargetType
}).nullable();

export type CampaignServiceGeoTargetTypeSetting = z.infer<typeof campaignServiceGeoTargetTypeSetting>;
