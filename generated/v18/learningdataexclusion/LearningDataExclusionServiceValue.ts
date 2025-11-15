import { z } from 'zod';

import { learningDataExclusion } from './LearningDataExclusion';
import { error } from '../../common/Error';

export const learningDataExclusionServiceValue = z.object({
  learningDataExclusion: learningDataExclusion,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type LearningDataExclusionServiceValue = z.infer<typeof learningDataExclusionServiceValue>;
