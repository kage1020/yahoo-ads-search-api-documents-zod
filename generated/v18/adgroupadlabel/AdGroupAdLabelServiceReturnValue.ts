import { z } from 'zod';

import { AdGroupAdLabelServiceValue } from './AdGroupAdLabelServiceValue';

export const AdGroupAdLabelServiceReturnValue = z.object({
  values: z.array(AdGroupAdLabelServiceValue).nullable()
}).nullable();

export type AdGroupAdLabelServiceReturnValue = z.infer<typeof AdGroupAdLabelServiceReturnValue>;
