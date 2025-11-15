import { z } from 'zod';

import { adGroupRetargetingListServiceExcludedType } from './AdGroupRetargetingListServiceExcludedType';

export const adGroupRetargetingListServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  excludedType: adGroupRetargetingListServiceExcludedType,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetListIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type AdGroupRetargetingListServiceSelector = z.infer<typeof adGroupRetargetingListServiceSelector>;
