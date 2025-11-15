import { z } from 'zod';

import { CampaignSharedSet } from './CampaignSharedSet';
import { Error } from './Error';

export const CampaignSharedSetServiceValue = z.object({
  campaignSharedSet: CampaignSharedSet,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignSharedSetServiceValue = z.infer<typeof CampaignSharedSetServiceValue>;
