import { z } from 'zod';

import { learningDataExclusionServiceValue } from './LearningDataExclusionServiceValue';

export const learningDataExclusionServiceReturnValue = z.object({
  values: z.array(learningDataExclusionServiceValue).nullable()
}).nullable();

export type LearningDataExclusionServiceReturnValue = z.infer<typeof learningDataExclusionServiceReturnValue>;
