import { z } from 'zod';

import { campaignServiceConversionSource } from './CampaignServiceConversionSource';
import { campaignServiceConversionActionCategory } from './CampaignServiceConversionActionCategory';

export const campaignServiceCampaignConversionGoals = z.object({
  source: campaignServiceConversionSource,
  category: campaignServiceConversionActionCategory
}).nullable();

export type CampaignServiceCampaignConversionGoals = z.infer<typeof campaignServiceCampaignConversionGoals>;
