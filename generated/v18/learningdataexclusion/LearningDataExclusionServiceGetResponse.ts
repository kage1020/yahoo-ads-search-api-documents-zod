import { z } from 'zod';

import { error } from '../../common/Error';
import { learningDataExclusionServicePage } from './LearningDataExclusionServicePage';

export const learningDataExclusionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: learningDataExclusionServicePage
}).nullable();

export type LearningDataExclusionServiceGetResponse = z.infer<typeof learningDataExclusionServiceGetResponse>;
