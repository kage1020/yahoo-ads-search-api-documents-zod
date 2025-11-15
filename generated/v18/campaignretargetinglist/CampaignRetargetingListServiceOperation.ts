import { z } from 'zod';

import { campaignRetargetingList } from './CampaignRetargetingList';

export const campaignRetargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignRetargetingList).nullable()
}).nullable();

export type CampaignRetargetingListServiceOperation = z.infer<typeof campaignRetargetingListServiceOperation>;
