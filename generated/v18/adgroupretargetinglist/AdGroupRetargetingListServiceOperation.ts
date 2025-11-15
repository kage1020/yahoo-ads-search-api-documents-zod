import { z } from 'zod';

import { adGroupRetargetingList } from './AdGroupRetargetingList';

export const adGroupRetargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupRetargetingList).nullable()
}).nullable();

export type AdGroupRetargetingListServiceOperation = z.infer<typeof adGroupRetargetingListServiceOperation>;
