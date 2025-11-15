import { z } from 'zod';

import { adGroupAdLabelServiceValue } from './AdGroupAdLabelServiceValue';

export const adGroupAdLabelServiceReturnValue = z.object({
  values: z.array(adGroupAdLabelServiceValue).nullable()
}).nullable();

export type AdGroupAdLabelServiceReturnValue = z.infer<typeof adGroupAdLabelServiceReturnValue>;
