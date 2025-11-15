import { z } from 'zod';

import { LearningDataExclusion } from './LearningDataExclusion';

export const LearningDataExclusionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(LearningDataExclusion).nullable()
}).nullable();

export type LearningDataExclusionServiceOperation = z.infer<typeof LearningDataExclusionServiceOperation>;
