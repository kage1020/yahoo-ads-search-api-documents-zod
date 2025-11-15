import { z } from 'zod';

import { campaignTarget } from './CampaignTarget';
import { error } from '../../common/Error';

export const campaignTargetServiceValue = z.object({
  campaignTarget: campaignTarget,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignTargetServiceValue = z.infer<typeof campaignTargetServiceValue>;
