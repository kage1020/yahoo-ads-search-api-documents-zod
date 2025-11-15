import { z } from 'zod';

import { KeywordPlanIdea } from './KeywordPlanIdea';
import { Error } from './Error';

export const KeywordPlanIdeaServiceValue = z.object({
  keywordPlanIdea: KeywordPlanIdea,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type KeywordPlanIdeaServiceValue = z.infer<typeof KeywordPlanIdeaServiceValue>;
