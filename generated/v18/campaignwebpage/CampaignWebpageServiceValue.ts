import { z } from 'zod';

import { campaignWebpage } from './CampaignWebpage';
import { error } from '../../common/Error';

export const campaignWebpageServiceValue = z.object({
  campaignWebpage: campaignWebpage,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignWebpageServiceValue = z.infer<typeof campaignWebpageServiceValue>;
