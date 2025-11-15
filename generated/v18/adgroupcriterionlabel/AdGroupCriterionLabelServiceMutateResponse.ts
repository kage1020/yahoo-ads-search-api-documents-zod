import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionLabelServiceReturnValue } from './AdGroupCriterionLabelServiceReturnValue';

export const AdGroupCriterionLabelServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCriterionLabelServiceReturnValue
}).nullable();

export type AdGroupCriterionLabelServiceMutateResponse = z.infer<typeof AdGroupCriterionLabelServiceMutateResponse>;
