import { z } from 'zod';

import { adGroupLabel } from './AdGroupLabel';
import { error } from '../../common/Error';

export const adGroupLabelServiceValue = z.object({
  adGroupLabel: adGroupLabel,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupLabelServiceValue = z.infer<typeof adGroupLabelServiceValue>;
