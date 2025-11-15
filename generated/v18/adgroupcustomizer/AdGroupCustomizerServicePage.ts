import { z } from 'zod';

import { AdGroupCustomizerServiceValue } from './AdGroupCustomizerServiceValue';

export const AdGroupCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCustomizerServicePage = z.infer<typeof AdGroupCustomizerServicePage>;
