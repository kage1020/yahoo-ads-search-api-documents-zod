import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionServiceReturnValue } from './AdGroupCriterionServiceReturnValue';

export const AdGroupCriterionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCriterionServiceReturnValue
}).nullable();

export type AdGroupCriterionServiceMutateResponse = z.infer<typeof AdGroupCriterionServiceMutateResponse>;
