import { z } from 'zod';

import { Error } from './Error';
import { LearningDataExclusionServiceReturnValue } from './LearningDataExclusionServiceReturnValue';

export const LearningDataExclusionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: LearningDataExclusionServiceReturnValue
}).nullable();

export type LearningDataExclusionServiceMutateResponse = z.infer<typeof LearningDataExclusionServiceMutateResponse>;
