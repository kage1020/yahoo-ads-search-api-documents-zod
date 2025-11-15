import { z } from 'zod';

import { adGroupWebpageServiceWebpageCondition } from './AdGroupWebpageServiceWebpageCondition';

export const adGroupWebpageServiceWebpageParameter = z.object({
  conditions: z.array(adGroupWebpageServiceWebpageCondition).nullable()
}).nullable();

export type AdGroupWebpageServiceWebpageParameter = z.infer<typeof adGroupWebpageServiceWebpageParameter>;
