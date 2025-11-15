import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionCustomizerServicePage } from './AdGroupCriterionCustomizerServicePage';

export const adGroupCriterionCustomizerServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCriterionCustomizerServicePage
}).nullable();

export type AdGroupCriterionCustomizerServiceGetResponse = z.infer<typeof adGroupCriterionCustomizerServiceGetResponse>;
