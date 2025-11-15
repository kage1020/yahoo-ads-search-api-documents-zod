import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionCustomizerServiceReturnValue } from './AdGroupCriterionCustomizerServiceReturnValue';

export const AdGroupCriterionCustomizerServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCriterionCustomizerServiceReturnValue
}).nullable();

export type AdGroupCriterionCustomizerServiceMutateResponse = z.infer<typeof AdGroupCriterionCustomizerServiceMutateResponse>;
