import { z } from 'zod';

import { keywordPlanIdea } from './KeywordPlanIdea';
import { error } from '../../common/Error';

export const keywordPlanIdeaServiceValue = z.object({
  keywordPlanIdea: keywordPlanIdea,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type KeywordPlanIdeaServiceValue = z.infer<typeof keywordPlanIdeaServiceValue>;
