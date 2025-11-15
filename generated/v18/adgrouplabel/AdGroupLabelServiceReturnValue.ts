import { z } from 'zod';

import { adGroupLabelServiceValue } from './AdGroupLabelServiceValue';

export const adGroupLabelServiceReturnValue = z.object({
  values: z.array(adGroupLabelServiceValue).nullable()
}).nullable();

export type AdGroupLabelServiceReturnValue = z.infer<typeof adGroupLabelServiceReturnValue>;
