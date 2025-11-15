import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupServicePage } from './AdGroupServicePage';

export const adGroupServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupServicePage
}).nullable();

export type AdGroupServiceGetResponse = z.infer<typeof adGroupServiceGetResponse>;
