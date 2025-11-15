import { z } from 'zod';

import { CampaignServiceGoalConfigLevel } from './CampaignServiceGoalConfigLevel';
import { CampaignServiceCampaignConversionGoals } from './CampaignServiceCampaignConversionGoals';

export const CampaignServiceConversionSetting = z.object({
  conversionGroupId: z.number().int().nullable(),
  goalConfigLevel: CampaignServiceGoalConfigLevel,
  campaignConversionGoals: z.array(CampaignServiceCampaignConversionGoals).nullable()
}).nullable();

export type CampaignServiceConversionSetting = z.infer<typeof CampaignServiceConversionSetting>;
