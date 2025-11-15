import { z } from 'zod';

import { campaignRetargetingListServiceValue } from './CampaignRetargetingListServiceValue';

export const campaignRetargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignRetargetingListServiceValue).nullable()
}).nullable();

export type CampaignRetargetingListServicePage = z.infer<typeof campaignRetargetingListServicePage>;
