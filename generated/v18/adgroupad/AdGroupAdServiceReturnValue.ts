import { z } from 'zod';

import { AdGroupAdServiceValue } from './AdGroupAdServiceValue';

export const AdGroupAdServiceReturnValue = z.object({
  values: z.array(AdGroupAdServiceValue).nullable()
}).nullable();

export type AdGroupAdServiceReturnValue = z.infer<typeof AdGroupAdServiceReturnValue>;
