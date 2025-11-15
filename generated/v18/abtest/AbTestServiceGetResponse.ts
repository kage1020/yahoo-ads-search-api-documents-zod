import { z } from 'zod';

import { error } from '../../common/Error';
import { abTestServicePage } from './AbTestServicePage';

export const abTestServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: abTestServicePage
}).nullable();

export type AbTestServiceGetResponse = z.infer<typeof abTestServiceGetResponse>;
