import { z } from 'zod';

import { CampaignRetargetingList } from './CampaignRetargetingList';

export const CampaignRetargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignRetargetingList).nullable()
}).nullable();

export type CampaignRetargetingListServiceOperation = z.infer<typeof CampaignRetargetingListServiceOperation>;
