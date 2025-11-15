import { z } from 'zod';

import { adGroupAd } from './AdGroupAd';
import { error } from '../../common/Error';

export const adGroupAdServiceValue = z.object({
  adGroupAd: adGroupAd,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAdServiceValue = z.infer<typeof adGroupAdServiceValue>;
