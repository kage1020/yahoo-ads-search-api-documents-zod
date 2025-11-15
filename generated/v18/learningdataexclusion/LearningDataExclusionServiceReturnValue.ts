import { z } from 'zod';

import { LearningDataExclusionServiceValue } from './LearningDataExclusionServiceValue';

export const LearningDataExclusionServiceReturnValue = z.object({
  values: z.array(LearningDataExclusionServiceValue).nullable()
}).nullable();

export type LearningDataExclusionServiceReturnValue = z.infer<typeof LearningDataExclusionServiceReturnValue>;
