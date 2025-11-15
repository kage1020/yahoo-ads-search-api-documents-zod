import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCustomizerServicePage } from './AdGroupCustomizerServicePage';

export const AdGroupCustomizerServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupCustomizerServicePage
}).nullable();

export type AdGroupCustomizerServiceGetResponse = z.infer<typeof AdGroupCustomizerServiceGetResponse>;
