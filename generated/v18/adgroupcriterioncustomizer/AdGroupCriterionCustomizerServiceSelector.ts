import { z } from 'zod';

import { adGroupCriterionCustomizerServiceType } from './AdGroupCriterionCustomizerServiceType';

export const adGroupCriterionCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(adGroupCriterionCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceSelector = z.infer<typeof adGroupCriterionCustomizerServiceSelector>;
