import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionServicePage } from './AdGroupCriterionServicePage';

export const AdGroupCriterionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCriterionServicePage
}).nullable();

export type AdGroupCriterionServiceGetResponse = z.infer<typeof AdGroupCriterionServiceGetResponse>;
