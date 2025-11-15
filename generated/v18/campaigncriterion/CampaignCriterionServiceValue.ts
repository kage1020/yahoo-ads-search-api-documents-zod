import { z } from 'zod';

import { CampaignCriterion } from './CampaignCriterion';
import { Error } from './Error';

export const CampaignCriterionServiceValue = z.object({
  campaignCriterion: CampaignCriterion,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignCriterionServiceValue = z.infer<typeof CampaignCriterionServiceValue>;
