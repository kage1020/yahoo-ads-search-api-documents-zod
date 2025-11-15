import { z } from 'zod';

import { CampaignTargetServiceValue } from './CampaignTargetServiceValue';

export const CampaignTargetServiceReturnValue = z.object({
  values: z.array(CampaignTargetServiceValue).nullable()
}).nullable();

export type CampaignTargetServiceReturnValue = z.infer<typeof CampaignTargetServiceReturnValue>;
