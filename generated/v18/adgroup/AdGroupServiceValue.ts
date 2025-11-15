import { z } from 'zod';

import { AdGroup } from './AdGroup';
import { Error } from './Error';

export const AdGroupServiceValue = z.object({
  adGroup: AdGroup,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupServiceValue = z.infer<typeof AdGroupServiceValue>;
