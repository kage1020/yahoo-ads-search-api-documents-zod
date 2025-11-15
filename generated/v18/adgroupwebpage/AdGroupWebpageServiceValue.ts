import { z } from 'zod';

import { adGroupWebpage } from './AdGroupWebpage';
import { error } from '../../common/Error';

export const adGroupWebpageServiceValue = z.object({
  adGroupWebpage: adGroupWebpage,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupWebpageServiceValue = z.infer<typeof adGroupWebpageServiceValue>;
