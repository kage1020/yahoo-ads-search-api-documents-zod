import { z } from 'zod';

import { error } from '../../common/Error';
import { keywordPlanIdeaServicePage } from './KeywordPlanIdeaServicePage';

export const keywordPlanIdeaServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: keywordPlanIdeaServicePage
}).nullable();

export type KeywordPlanIdeaServiceGetResponse = z.infer<typeof keywordPlanIdeaServiceGetResponse>;
