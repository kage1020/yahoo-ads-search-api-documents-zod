import { z } from 'zod';

import { AdGroupWebpageServiceWebpageCondition } from './AdGroupWebpageServiceWebpageCondition';

export const AdGroupWebpageServiceWebpageParameter = z.object({
  conditions: z.array(AdGroupWebpageServiceWebpageCondition).nullable()
}).nullable();

export type AdGroupWebpageServiceWebpageParameter = z.infer<typeof AdGroupWebpageServiceWebpageParameter>;
