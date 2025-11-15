import { z } from 'zod';

import { Error } from './Error';
import { AdGroupRetargetingListServicePage } from './AdGroupRetargetingListServicePage';

export const AdGroupRetargetingListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupRetargetingListServicePage
}).nullable();

export type AdGroupRetargetingListServiceGetResponse = z.infer<typeof AdGroupRetargetingListServiceGetResponse>;
