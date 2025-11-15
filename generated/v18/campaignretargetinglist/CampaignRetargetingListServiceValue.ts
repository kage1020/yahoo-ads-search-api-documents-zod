import { z } from 'zod';

import { campaignRetargetingList } from './CampaignRetargetingList';
import { error } from '../../common/Error';

export const campaignRetargetingListServiceValue = z.object({
  campaignRetargetingList: campaignRetargetingList,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignRetargetingListServiceValue = z.infer<typeof campaignRetargetingListServiceValue>;
