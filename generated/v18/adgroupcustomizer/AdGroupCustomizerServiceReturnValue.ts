import { z } from 'zod';

import { AdGroupCustomizerServiceValue } from './AdGroupCustomizerServiceValue';

export const AdGroupCustomizerServiceReturnValue = z.object({
  values: z.array(AdGroupCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCustomizerServiceReturnValue = z.infer<typeof AdGroupCustomizerServiceReturnValue>;
