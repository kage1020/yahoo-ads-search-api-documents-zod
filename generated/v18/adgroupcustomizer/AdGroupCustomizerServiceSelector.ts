import { z } from 'zod';

import { adGroupCustomizerServiceType } from './AdGroupCustomizerServiceType';

export const adGroupCustomizerServiceSelector = z.object({
  accountId: z.number().int(),
  customizerAttributeIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(adGroupCustomizerServiceType).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupCustomizerServiceSelector = z.infer<typeof adGroupCustomizerServiceSelector>;
