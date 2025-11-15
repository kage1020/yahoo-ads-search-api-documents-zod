import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCustomizer } from './AdGroupCustomizer';

export const AdGroupCustomizerServiceValue = z.object({
  errors: z.array(Error).nullable(),
  adGroupCustomizer: AdGroupCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCustomizerServiceValue = z.infer<typeof AdGroupCustomizerServiceValue>;
