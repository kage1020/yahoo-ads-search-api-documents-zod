import { z } from 'zod';

import { CampaignLabel } from './CampaignLabel';
import { Error } from './Error';

export const CampaignLabelServiceValue = z.object({
  campaignLabel: CampaignLabel,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignLabelServiceValue = z.infer<typeof CampaignLabelServiceValue>;
