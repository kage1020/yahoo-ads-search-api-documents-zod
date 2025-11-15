import { z } from 'zod';

import { Error } from './Error';
import { LabelServicePage } from './LabelServicePage';

export const LabelServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: LabelServicePage
}).nullable();

export type LabelServiceGetResponse = z.infer<typeof LabelServiceGetResponse>;
