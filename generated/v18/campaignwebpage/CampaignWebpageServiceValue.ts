import { z } from 'zod';

import { CampaignWebpage } from './CampaignWebpage';
import { Error } from './Error';

export const CampaignWebpageServiceValue = z.object({
  campaignWebpage: CampaignWebpage,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignWebpageServiceValue = z.infer<typeof CampaignWebpageServiceValue>;
