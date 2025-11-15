import { z } from 'zod';

import { LearningDataExclusion } from './LearningDataExclusion';
import { Error } from './Error';

export const LearningDataExclusionServiceValue = z.object({
  learningDataExclusion: LearningDataExclusion,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type LearningDataExclusionServiceValue = z.infer<typeof LearningDataExclusionServiceValue>;
