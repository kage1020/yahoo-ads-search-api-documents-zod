import { z } from 'zod';

import { Error } from './Error';
import { SharedCriterionServicePage } from './SharedCriterionServicePage';

export const SharedCriterionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SharedCriterionServicePage
}).nullable();

export type SharedCriterionServiceGetResponse = z.infer<typeof SharedCriterionServiceGetResponse>;
