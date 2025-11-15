import { z } from 'zod';

import { campaignLabel } from './CampaignLabel';
import { error } from '../../common/Error';

export const campaignLabelServiceValue = z.object({
  campaignLabel: campaignLabel,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignLabelServiceValue = z.infer<typeof campaignLabelServiceValue>;
