import { z } from 'zod';

import { Error } from './Error';
import { AdGroupWebpageServicePage } from './AdGroupWebpageServicePage';

export const AdGroupWebpageServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupWebpageServicePage
}).nullable();

export type AdGroupWebpageServiceGetResponse = z.infer<typeof AdGroupWebpageServiceGetResponse>;
