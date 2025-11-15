import { z } from 'zod';

import { adGroupAdServiceValue } from './AdGroupAdServiceValue';

export const adGroupAdServiceReturnValue = z.object({
  values: z.array(adGroupAdServiceValue).nullable()
}).nullable();

export type AdGroupAdServiceReturnValue = z.infer<typeof adGroupAdServiceReturnValue>;
