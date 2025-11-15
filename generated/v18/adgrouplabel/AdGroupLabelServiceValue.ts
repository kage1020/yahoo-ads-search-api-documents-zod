import { z } from 'zod';

import { AdGroupLabel } from './AdGroupLabel';
import { Error } from './Error';

export const AdGroupLabelServiceValue = z.object({
  adGroupLabel: AdGroupLabel,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupLabelServiceValue = z.infer<typeof AdGroupLabelServiceValue>;
