import { z } from 'zod';

import { adGroupCriterionServiceIsRemove } from './AdGroupCriterionServiceIsRemove';
import { adGroupCriterionServiceCustomParameter } from './AdGroupCriterionServiceCustomParameter';

export const adGroupCriterionServiceCustomParameters = z.object({
  isRemove: adGroupCriterionServiceIsRemove,
  parameters: z.array(adGroupCriterionServiceCustomParameter).nullable()
}).nullable();

export type AdGroupCriterionServiceCustomParameters = z.infer<typeof adGroupCriterionServiceCustomParameters>;
