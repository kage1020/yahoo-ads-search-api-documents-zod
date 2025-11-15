import { z } from 'zod';

import { adGroupServiceCriterionType } from './AdGroupServiceCriterionType';
import { adGroupServiceTargetingSetting } from './AdGroupServiceTargetingSetting';

export const adGroupServiceSettings = z.object({
  criterionType: adGroupServiceCriterionType,
  targetingSetting: adGroupServiceTargetingSetting
}).nullable();

export type AdGroupServiceSettings = z.infer<typeof adGroupServiceSettings>;
