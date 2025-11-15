import { z } from 'zod';

import { CampaignServiceGeoTargetType } from './CampaignServiceGeoTargetType';

export const CampaignServiceGeoTargetTypeSetting = z.object({
  negativeGeoTargetType: CampaignServiceGeoTargetType,
  positiveGeoTargetType: CampaignServiceGeoTargetType
}).nullable();

export type CampaignServiceGeoTargetTypeSetting = z.infer<typeof CampaignServiceGeoTargetTypeSetting>;
