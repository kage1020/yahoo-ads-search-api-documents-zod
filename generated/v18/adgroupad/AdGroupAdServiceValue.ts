import { z } from 'zod';

import { AdGroupAd } from './AdGroupAd';
import { Error } from './Error';

export const AdGroupAdServiceValue = z.object({
  adGroupAd: AdGroupAd,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAdServiceValue = z.infer<typeof AdGroupAdServiceValue>;
