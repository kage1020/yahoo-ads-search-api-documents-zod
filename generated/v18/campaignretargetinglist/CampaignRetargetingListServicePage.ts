import { z } from 'zod';

import { CampaignRetargetingListServiceValue } from './CampaignRetargetingListServiceValue';

export const CampaignRetargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignRetargetingListServiceValue).nullable()
}).nullable();

export type CampaignRetargetingListServicePage = z.infer<typeof CampaignRetargetingListServicePage>;
