import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupRetargetingListServicePage } from './AdGroupRetargetingListServicePage';

export const adGroupRetargetingListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupRetargetingListServicePage
}).nullable();

export type AdGroupRetargetingListServiceGetResponse = z.infer<typeof adGroupRetargetingListServiceGetResponse>;
