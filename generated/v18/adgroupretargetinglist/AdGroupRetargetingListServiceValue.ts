import { z } from 'zod';

import { adGroupRetargetingList } from './AdGroupRetargetingList';
import { error } from '../../common/Error';

export const adGroupRetargetingListServiceValue = z.object({
  adGroupRetargetingList: adGroupRetargetingList,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupRetargetingListServiceValue = z.infer<typeof adGroupRetargetingListServiceValue>;
