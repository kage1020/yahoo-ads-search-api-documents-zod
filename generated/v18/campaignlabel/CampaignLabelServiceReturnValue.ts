import { z } from 'zod';

import { CampaignLabelServiceValue } from './CampaignLabelServiceValue';

export const CampaignLabelServiceReturnValue = z.object({
  values: z.array(CampaignLabelServiceValue).nullable()
}).nullable();

export type CampaignLabelServiceReturnValue = z.infer<typeof CampaignLabelServiceReturnValue>;
