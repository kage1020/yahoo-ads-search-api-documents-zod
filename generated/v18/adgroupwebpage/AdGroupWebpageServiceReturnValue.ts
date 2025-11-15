import { z } from 'zod';

import { adGroupWebpageServiceValue } from './AdGroupWebpageServiceValue';

export const adGroupWebpageServiceReturnValue = z.object({
  values: z.array(adGroupWebpageServiceValue).nullable()
}).nullable();

export type AdGroupWebpageServiceReturnValue = z.infer<typeof adGroupWebpageServiceReturnValue>;
