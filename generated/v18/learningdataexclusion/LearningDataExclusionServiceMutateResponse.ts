import { z } from 'zod';

import { error } from '../../common/Error';
import { learningDataExclusionServiceReturnValue } from './LearningDataExclusionServiceReturnValue';

export const learningDataExclusionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: learningDataExclusionServiceReturnValue
}).nullable();

export type LearningDataExclusionServiceMutateResponse = z.infer<typeof learningDataExclusionServiceMutateResponse>;
