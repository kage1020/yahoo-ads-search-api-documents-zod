import { z } from 'zod';

import { CampaignRetargetingList } from './CampaignRetargetingList';
import { Error } from './Error';

export const CampaignRetargetingListServiceValue = z.object({
  campaignRetargetingList: CampaignRetargetingList,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignRetargetingListServiceValue = z.infer<typeof CampaignRetargetingListServiceValue>;
