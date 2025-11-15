import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionServiceReturnValue } from './AdGroupCriterionServiceReturnValue';

export const adGroupCriterionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCriterionServiceReturnValue
}).nullable();

export type AdGroupCriterionServiceMutateResponse = z.infer<typeof adGroupCriterionServiceMutateResponse>;
