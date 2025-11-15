import { z } from 'zod';

import { Error } from './Error';
import { AppLinkServicePage } from './AppLinkServicePage';

export const AppLinkServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AppLinkServicePage
}).nullable();

export type AppLinkServiceGetResponse = z.infer<typeof AppLinkServiceGetResponse>;
