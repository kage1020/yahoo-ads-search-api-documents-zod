import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCustomizerServicePage } from './AdGroupCustomizerServicePage';

export const adGroupCustomizerServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupCustomizerServicePage
}).nullable();

export type AdGroupCustomizerServiceGetResponse = z.infer<typeof adGroupCustomizerServiceGetResponse>;
