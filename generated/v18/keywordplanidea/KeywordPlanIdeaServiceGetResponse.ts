import { z } from 'zod';

import { Error } from './Error';
import { KeywordPlanIdeaServicePage } from './KeywordPlanIdeaServicePage';

export const KeywordPlanIdeaServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: KeywordPlanIdeaServicePage
}).nullable();

export type KeywordPlanIdeaServiceGetResponse = z.infer<typeof KeywordPlanIdeaServiceGetResponse>;
