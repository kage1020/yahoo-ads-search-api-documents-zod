import { z } from 'zod';

import { CampaignRetargetingListServiceValue } from './CampaignRetargetingListServiceValue';

export const CampaignRetargetingListServiceReturnValue = z.object({
  values: z.array(CampaignRetargetingListServiceValue).nullable()
}).nullable();

export type CampaignRetargetingListServiceReturnValue = z.infer<typeof CampaignRetargetingListServiceReturnValue>;
