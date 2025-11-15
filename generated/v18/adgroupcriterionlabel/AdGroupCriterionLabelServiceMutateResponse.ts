import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionLabelServiceReturnValue } from './AdGroupCriterionLabelServiceReturnValue';

export const adGroupCriterionLabelServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCriterionLabelServiceReturnValue
}).nullable();

export type AdGroupCriterionLabelServiceMutateResponse = z.infer<typeof adGroupCriterionLabelServiceMutateResponse>;
