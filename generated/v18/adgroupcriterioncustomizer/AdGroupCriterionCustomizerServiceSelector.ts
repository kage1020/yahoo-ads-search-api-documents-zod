import { z } from 'zod';

import { AdGroupCriterionCustomizerServiceType } from './AdGroupCriterionCustomizerServiceType';

export const AdGroupCriterionCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(AdGroupCriterionCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceSelector = z.infer<typeof AdGroupCriterionCustomizerServiceSelector>;
