import { z } from 'zod';

import { adGroupAdLabel } from './AdGroupAdLabel';
import { error } from '../../common/Error';

export const adGroupAdLabelServiceValue = z.object({
  adGroupAdLabel: adGroupAdLabel,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAdLabelServiceValue = z.infer<typeof adGroupAdLabelServiceValue>;
