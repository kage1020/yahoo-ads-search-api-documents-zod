import { z } from 'zod';

import { error } from '../../common/Error';
import { accountManagementServicePage } from './AccountManagementServicePage';

export const accountManagementServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountManagementServicePage
}).nullable();

export type AccountManagementServiceGetResponse = z.infer<typeof accountManagementServiceGetResponse>;
