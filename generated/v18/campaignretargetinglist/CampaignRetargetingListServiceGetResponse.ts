import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignRetargetingListServicePage } from './CampaignRetargetingListServicePage';

export const campaignRetargetingListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignRetargetingListServicePage
}).nullable();

export type CampaignRetargetingListServiceGetResponse = z.infer<typeof campaignRetargetingListServiceGetResponse>;
