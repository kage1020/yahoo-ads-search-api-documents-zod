import { z } from 'zod';

import { Error } from './Error';
import { BaseAccountServicePage } from './BaseAccountServicePage';

export const BaseAccountServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BaseAccountServicePage
}).nullable();

export type BaseAccountServiceGetResponse = z.infer<typeof BaseAccountServiceGetResponse>;
