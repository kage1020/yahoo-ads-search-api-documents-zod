import { z } from 'zod';

import { AdGroupCriterionServiceIsRemove } from './AdGroupCriterionServiceIsRemove';
import { AdGroupCriterionServiceCustomParameter } from './AdGroupCriterionServiceCustomParameter';

export const AdGroupCriterionServiceCustomParameters = z.object({
  isRemove: AdGroupCriterionServiceIsRemove,
  parameters: z.array(AdGroupCriterionServiceCustomParameter).nullable()
}).nullable();

export type AdGroupCriterionServiceCustomParameters = z.infer<typeof AdGroupCriterionServiceCustomParameters>;
