import { z } from 'zod';

import { AdGroupServiceCriterionType } from './AdGroupServiceCriterionType';
import { AdGroupServiceTargetingSetting } from './AdGroupServiceTargetingSetting';

export const AdGroupServiceSettings = z.object({
  criterionType: AdGroupServiceCriterionType,
  targetingSetting: AdGroupServiceTargetingSetting
}).nullable();

export type AdGroupServiceSettings = z.infer<typeof AdGroupServiceSettings>;
