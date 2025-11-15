import { z } from 'zod';

import { CampaignWebpageServiceValue } from './CampaignWebpageServiceValue';

export const CampaignWebpageServiceReturnValue = z.object({
  values: z.array(CampaignWebpageServiceValue).nullable()
}).nullable();

export type CampaignWebpageServiceReturnValue = z.infer<typeof CampaignWebpageServiceReturnValue>;
