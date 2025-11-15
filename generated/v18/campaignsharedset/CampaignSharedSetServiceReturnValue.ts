import { z } from 'zod';

import { CampaignSharedSetServiceValue } from './CampaignSharedSetServiceValue';

export const CampaignSharedSetServiceReturnValue = z.object({
  values: z.array(CampaignSharedSetServiceValue).nullable()
}).nullable();

export type CampaignSharedSetServiceReturnValue = z.infer<typeof CampaignSharedSetServiceReturnValue>;
