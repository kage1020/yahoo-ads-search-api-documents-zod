import { z } from 'zod';

import { AdGroupServiceValue } from './AdGroupServiceValue';

export const AdGroupServiceReturnValue = z.object({
  values: z.array(AdGroupServiceValue).nullable()
}).nullable();

export type AdGroupServiceReturnValue = z.infer<typeof AdGroupServiceReturnValue>;
