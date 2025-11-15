import { z } from 'zod';

import { AdGroupRetargetingList } from './AdGroupRetargetingList';

export const AdGroupRetargetingListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupRetargetingList).nullable()
}).nullable();

export type AdGroupRetargetingListServiceOperation = z.infer<typeof AdGroupRetargetingListServiceOperation>;
