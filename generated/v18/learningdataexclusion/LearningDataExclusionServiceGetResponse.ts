import { z } from 'zod';

import { Error } from './Error';
import { LearningDataExclusionServicePage } from './LearningDataExclusionServicePage';

export const LearningDataExclusionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: LearningDataExclusionServicePage
}).nullable();

export type LearningDataExclusionServiceGetResponse = z.infer<typeof LearningDataExclusionServiceGetResponse>;
