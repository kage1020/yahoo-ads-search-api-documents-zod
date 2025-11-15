import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAdServicePage } from './AdGroupAdServicePage';

export const adGroupAdServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAdServicePage
}).nullable();

export type AdGroupAdServiceGetResponse = z.infer<typeof adGroupAdServiceGetResponse>;
