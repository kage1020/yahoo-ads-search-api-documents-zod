import { z } from 'zod';

import { Error } from './Error';
import { AbTestServicePage } from './AbTestServicePage';

export const AbTestServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AbTestServicePage
}).nullable();

export type AbTestServiceGetResponse = z.infer<typeof AbTestServiceGetResponse>;
