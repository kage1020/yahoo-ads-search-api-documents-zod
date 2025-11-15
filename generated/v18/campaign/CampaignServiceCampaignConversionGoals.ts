import { z } from 'zod';

import { CampaignServiceConversionSource } from './CampaignServiceConversionSource';
import { CampaignServiceConversionActionCategory } from './CampaignServiceConversionActionCategory';

export const CampaignServiceCampaignConversionGoals = z.object({
  source: CampaignServiceConversionSource,
  category: CampaignServiceConversionActionCategory
}).nullable();

export type CampaignServiceCampaignConversionGoals = z.infer<typeof CampaignServiceCampaignConversionGoals>;
