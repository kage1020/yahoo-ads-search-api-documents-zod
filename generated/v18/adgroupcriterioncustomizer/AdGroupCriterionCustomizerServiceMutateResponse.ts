import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionCustomizerServiceReturnValue } from './AdGroupCriterionCustomizerServiceReturnValue';

export const adGroupCriterionCustomizerServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCriterionCustomizerServiceReturnValue
}).nullable();

export type AdGroupCriterionCustomizerServiceMutateResponse = z.infer<typeof adGroupCriterionCustomizerServiceMutateResponse>;
