import { z } from 'zod';

import { AdGroupCustomizerServiceType } from './AdGroupCustomizerServiceType';

export const AdGroupCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(AdGroupCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupCustomizerServiceSelector = z.infer<typeof AdGroupCustomizerServiceSelector>;
