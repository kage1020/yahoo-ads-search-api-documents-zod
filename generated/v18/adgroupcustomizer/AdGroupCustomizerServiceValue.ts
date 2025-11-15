import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCustomizer } from './AdGroupCustomizer';

export const adGroupCustomizerServiceValue = z.object({
  errors: z.array(error).nullable(),
  adGroupCustomizer: adGroupCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCustomizerServiceValue = z.infer<typeof adGroupCustomizerServiceValue>;
