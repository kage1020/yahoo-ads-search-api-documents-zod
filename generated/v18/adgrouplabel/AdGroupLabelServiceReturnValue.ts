import { z } from 'zod';

import { AdGroupLabelServiceValue } from './AdGroupLabelServiceValue';

export const AdGroupLabelServiceReturnValue = z.object({
  values: z.array(AdGroupLabelServiceValue).nullable()
}).nullable();

export type AdGroupLabelServiceReturnValue = z.infer<typeof AdGroupLabelServiceReturnValue>;
