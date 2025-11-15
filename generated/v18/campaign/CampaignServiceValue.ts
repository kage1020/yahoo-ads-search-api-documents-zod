import { z } from 'zod';

import { campaign } from './Campaign';
import { error } from '../../common/Error';

export const campaignServiceValue = z.object({
  campaign: campaign,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignServiceValue = z.infer<typeof campaignServiceValue>;
