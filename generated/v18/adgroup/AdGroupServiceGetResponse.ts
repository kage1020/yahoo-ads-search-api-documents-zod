import { z } from 'zod';

import { Error } from './Error';
import { AdGroupServicePage } from './AdGroupServicePage';

export const AdGroupServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupServicePage
}).nullable();

export type AdGroupServiceGetResponse = z.infer<typeof AdGroupServiceGetResponse>;
