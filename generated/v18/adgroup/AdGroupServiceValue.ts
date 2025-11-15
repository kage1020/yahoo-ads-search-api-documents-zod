import { z } from 'zod';

import { adGroup } from './AdGroup';
import { error } from '../../common/Error';

export const adGroupServiceValue = z.object({
  adGroup: adGroup,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupServiceValue = z.infer<typeof adGroupServiceValue>;
