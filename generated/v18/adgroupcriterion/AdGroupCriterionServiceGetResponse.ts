import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionServicePage } from './AdGroupCriterionServicePage';

export const adGroupCriterionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCriterionServicePage
}).nullable();

export type AdGroupCriterionServiceGetResponse = z.infer<typeof adGroupCriterionServiceGetResponse>;
