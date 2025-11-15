import { z } from 'zod';

import { LearningDataExclusionServiceValue } from './LearningDataExclusionServiceValue';

export const LearningDataExclusionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(LearningDataExclusionServiceValue).nullable()
}).nullable();

export type LearningDataExclusionServicePage = z.infer<typeof LearningDataExclusionServicePage>;
