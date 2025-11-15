import { z } from 'zod';

import { CampaignServiceValue } from './CampaignServiceValue';

export const CampaignServiceReturnValue = z.object({
  values: z.array(CampaignServiceValue).nullable()
}).nullable();

export type CampaignServiceReturnValue = z.infer<typeof CampaignServiceReturnValue>;
