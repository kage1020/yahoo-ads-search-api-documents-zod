import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignCustomizer } from './CampaignCustomizer';

export const campaignCustomizerServiceValue = z.object({
  errors: z.array(error).nullable(),
  campaignCustomizer: campaignCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignCustomizerServiceValue = z.infer<typeof campaignCustomizerServiceValue>;
