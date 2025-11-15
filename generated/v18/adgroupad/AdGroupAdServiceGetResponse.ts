import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAdServicePage } from './AdGroupAdServicePage';

export const AdGroupAdServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAdServicePage
}).nullable();

export type AdGroupAdServiceGetResponse = z.infer<typeof AdGroupAdServiceGetResponse>;
