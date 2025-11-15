import { z } from 'zod';

import { adGroupCustomizerServiceValue } from './AdGroupCustomizerServiceValue';

export const adGroupCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCustomizerServicePage = z.infer<typeof adGroupCustomizerServicePage>;
