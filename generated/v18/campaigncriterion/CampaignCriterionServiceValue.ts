import { z } from 'zod';

import { campaignCriterion } from './CampaignCriterion';
import { error } from '../../common/Error';

export const campaignCriterionServiceValue = z.object({
  campaignCriterion: campaignCriterion,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignCriterionServiceValue = z.infer<typeof campaignCriterionServiceValue>;
