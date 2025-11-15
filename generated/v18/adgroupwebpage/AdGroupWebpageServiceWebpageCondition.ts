import { z } from 'zod';

import { adGroupWebpageServiceWebpageConditionType } from './AdGroupWebpageServiceWebpageConditionType';
import { adGroupWebpageServiceOperator } from './AdGroupWebpageServiceOperator';

export const adGroupWebpageServiceWebpageCondition = z.object({
  argument: z.string().nullable(),
  webpageConditionType: adGroupWebpageServiceWebpageConditionType,
  operator: adGroupWebpageServiceOperator
}).nullable();

export type AdGroupWebpageServiceWebpageCondition = z.infer<typeof adGroupWebpageServiceWebpageCondition>;
