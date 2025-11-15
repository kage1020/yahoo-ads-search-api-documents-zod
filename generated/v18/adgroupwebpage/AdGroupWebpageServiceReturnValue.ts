import { z } from 'zod';

import { AdGroupWebpageServiceValue } from './AdGroupWebpageServiceValue';

export const AdGroupWebpageServiceReturnValue = z.object({
  values: z.array(AdGroupWebpageServiceValue).nullable()
}).nullable();

export type AdGroupWebpageServiceReturnValue = z.infer<typeof AdGroupWebpageServiceReturnValue>;
