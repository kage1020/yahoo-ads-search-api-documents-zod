import { z } from 'zod';

import { learningDataExclusionServiceValue } from './LearningDataExclusionServiceValue';

export const learningDataExclusionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(learningDataExclusionServiceValue).nullable()
}).nullable();

export type LearningDataExclusionServicePage = z.infer<typeof learningDataExclusionServicePage>;
