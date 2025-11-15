import { z } from 'zod';

import { campaignServiceGoalConfigLevel } from './CampaignServiceGoalConfigLevel';
import { campaignServiceCampaignConversionGoals } from './CampaignServiceCampaignConversionGoals';

export const campaignServiceConversionSetting = z.object({
  conversionGroupId: z.number().int().nullable(),
  goalConfigLevel: campaignServiceGoalConfigLevel,
  campaignConversionGoals: z.array(campaignServiceCampaignConversionGoals).nullable()
}).nullable();

export type CampaignServiceConversionSetting = z.infer<typeof campaignServiceConversionSetting>;
