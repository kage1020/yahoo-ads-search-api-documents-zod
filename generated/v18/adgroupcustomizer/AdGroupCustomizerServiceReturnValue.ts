import { z } from 'zod';

import { adGroupCustomizerServiceValue } from './AdGroupCustomizerServiceValue';

export const adGroupCustomizerServiceReturnValue = z.object({
  values: z.array(adGroupCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCustomizerServiceReturnValue = z.infer<typeof adGroupCustomizerServiceReturnValue>;
