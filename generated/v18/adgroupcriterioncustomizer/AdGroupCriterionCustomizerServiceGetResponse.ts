import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionCustomizerServicePage } from './AdGroupCriterionCustomizerServicePage';

export const AdGroupCriterionCustomizerServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCriterionCustomizerServicePage
}).nullable();

export type AdGroupCriterionCustomizerServiceGetResponse = z.infer<typeof AdGroupCriterionCustomizerServiceGetResponse>;
