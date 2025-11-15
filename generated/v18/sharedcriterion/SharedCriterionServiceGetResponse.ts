import { z } from 'zod';

import { error } from '../../common/Error';
import { sharedCriterionServicePage } from './SharedCriterionServicePage';

export const sharedCriterionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: sharedCriterionServicePage
}).nullable();

export type SharedCriterionServiceGetResponse = z.infer<typeof sharedCriterionServiceGetResponse>;
