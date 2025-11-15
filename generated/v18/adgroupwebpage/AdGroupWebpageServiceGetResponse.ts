import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupWebpageServicePage } from './AdGroupWebpageServicePage';

export const adGroupWebpageServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupWebpageServicePage
}).nullable();

export type AdGroupWebpageServiceGetResponse = z.infer<typeof adGroupWebpageServiceGetResponse>;
