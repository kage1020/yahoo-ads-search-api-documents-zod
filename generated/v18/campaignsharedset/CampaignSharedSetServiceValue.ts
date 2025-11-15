import { z } from 'zod';

import { campaignSharedSet } from './CampaignSharedSet';
import { error } from '../../common/Error';

export const campaignSharedSetServiceValue = z.object({
  campaignSharedSet: campaignSharedSet,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignSharedSetServiceValue = z.infer<typeof campaignSharedSetServiceValue>;
