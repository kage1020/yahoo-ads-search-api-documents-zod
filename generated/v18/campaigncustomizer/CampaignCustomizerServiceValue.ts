import { z } from 'zod';

import { Error } from './Error';
import { CampaignCustomizer } from './CampaignCustomizer';

export const CampaignCustomizerServiceValue = z.object({
  errors: z.array(Error).nullable(),
  campaignCustomizer: CampaignCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignCustomizerServiceValue = z.infer<typeof CampaignCustomizerServiceValue>;
