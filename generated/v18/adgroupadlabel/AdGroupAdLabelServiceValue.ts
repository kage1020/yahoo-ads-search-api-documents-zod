import { z } from 'zod';

import { AdGroupAdLabel } from './AdGroupAdLabel';
import { Error } from './Error';

export const AdGroupAdLabelServiceValue = z.object({
  adGroupAdLabel: AdGroupAdLabel,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupAdLabelServiceValue = z.infer<typeof AdGroupAdLabelServiceValue>;
