import { z } from 'zod';

import { AdGroupWebpageServiceWebpageConditionType } from './AdGroupWebpageServiceWebpageConditionType';
import { AdGroupWebpageServiceOperator } from './AdGroupWebpageServiceOperator';

export const AdGroupWebpageServiceWebpageCondition = z.object({
  argument: z.string().nullable(),
  webpageConditionType: AdGroupWebpageServiceWebpageConditionType,
  operator: AdGroupWebpageServiceOperator
}).nullable();

export type AdGroupWebpageServiceWebpageCondition = z.infer<typeof AdGroupWebpageServiceWebpageCondition>;
