import { z } from 'zod';

import { CampaignTarget } from './CampaignTarget';
import { Error } from './Error';

export const CampaignTargetServiceValue = z.object({
  campaignTarget: CampaignTarget,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignTargetServiceValue = z.infer<typeof CampaignTargetServiceValue>;
