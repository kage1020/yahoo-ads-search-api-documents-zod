import { z } from 'zod';

import { learningDataExclusion } from './LearningDataExclusion';

export const learningDataExclusionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(learningDataExclusion).nullable()
}).nullable();

export type LearningDataExclusionServiceOperation = z.infer<typeof learningDataExclusionServiceOperation>;
