import { z } from 'zod';

import { AdGroupWebpage } from './AdGroupWebpage';
import { Error } from './Error';

export const AdGroupWebpageServiceValue = z.object({
  adGroupWebpage: AdGroupWebpage,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupWebpageServiceValue = z.infer<typeof AdGroupWebpageServiceValue>;
