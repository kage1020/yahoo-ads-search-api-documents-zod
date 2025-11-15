import { z } from 'zod';

import { error } from '../../common/Error';
import { baseAccountServicePage } from './BaseAccountServicePage';

export const baseAccountServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: baseAccountServicePage
}).nullable();

export type BaseAccountServiceGetResponse = z.infer<typeof baseAccountServiceGetResponse>;
