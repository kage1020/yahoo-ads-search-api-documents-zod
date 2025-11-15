import { z } from 'zod';

import { Error } from './Error';
import { CampaignRetargetingListServicePage } from './CampaignRetargetingListServicePage';

export const CampaignRetargetingListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignRetargetingListServicePage
}).nullable();

export type CampaignRetargetingListServiceGetResponse = z.infer<typeof CampaignRetargetingListServiceGetResponse>;
