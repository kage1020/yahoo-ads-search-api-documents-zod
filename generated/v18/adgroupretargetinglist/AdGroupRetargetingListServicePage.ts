import { z } from 'zod';

import { AdGroupRetargetingListServiceValue } from './AdGroupRetargetingListServiceValue';

export const AdGroupRetargetingListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupRetargetingListServiceValue).nullable()
}).nullable();

export type AdGroupRetargetingListServicePage = z.infer<typeof AdGroupRetargetingListServicePage>;
