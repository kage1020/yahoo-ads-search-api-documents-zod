import { z } from 'zod';

import { error } from '../../common/Error';
import { appLinkServicePage } from './AppLinkServicePage';

export const appLinkServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: appLinkServicePage
}).nullable();

export type AppLinkServiceGetResponse = z.infer<typeof appLinkServiceGetResponse>;
