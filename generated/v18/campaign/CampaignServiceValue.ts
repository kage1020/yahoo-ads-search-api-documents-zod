import { z } from 'zod';

import { Campaign } from './Campaign';
import { Error } from './Error';

export const CampaignServiceValue = z.object({
  campaign: Campaign,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignServiceValue = z.infer<typeof CampaignServiceValue>;
