import { z } from 'zod';

import { adGroupServiceValue } from './AdGroupServiceValue';

export const adGroupServiceReturnValue = z.object({
  values: z.array(adGroupServiceValue).nullable()
}).nullable();

export type AdGroupServiceReturnValue = z.infer<typeof adGroupServiceReturnValue>;
