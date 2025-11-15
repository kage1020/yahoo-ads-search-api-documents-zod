import { z } from 'zod';

import { adGroupRetargetingListServiceValue } from './AdGroupRetargetingListServiceValue';

export const adGroupRetargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupRetargetingListServiceValue).nullable()
}).nullable();

export type AdGroupRetargetingListServicePage = z.infer<typeof adGroupRetargetingListServicePage>;
