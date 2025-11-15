import { z } from 'zod';

import { campaignRetargetingListServiceValue } from './CampaignRetargetingListServiceValue';

export const campaignRetargetingListServiceReturnValue = z.object({
  values: z.array(campaignRetargetingListServiceValue).nullable()
}).nullable();

export type CampaignRetargetingListServiceReturnValue = z.infer<typeof campaignRetargetingListServiceReturnValue>;
