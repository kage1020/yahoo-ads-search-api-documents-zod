import { z } from 'zod';

import { error } from '../../common/Error';
import { accountManagementServiceReturnValue } from './AccountManagementServiceReturnValue';

export const accountManagementServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountManagementServiceReturnValue
}).nullable();

export type AccountManagementServiceMutateResponse = z.infer<typeof accountManagementServiceMutateResponse>;
