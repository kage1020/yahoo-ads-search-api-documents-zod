import { z } from 'zod';

import { AdGroupRetargetingList } from './AdGroupRetargetingList';
import { Error } from './Error';

export const AdGroupRetargetingListServiceValue = z.object({
  adGroupRetargetingList: AdGroupRetargetingList,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupRetargetingListServiceValue = z.infer<typeof AdGroupRetargetingListServiceValue>;
