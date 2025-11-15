import { z } from 'zod';

import { error } from '../../common/Error';
import { labelServicePage } from './LabelServicePage';

export const labelServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: labelServicePage
}).nullable();

export type LabelServiceGetResponse = z.infer<typeof labelServiceGetResponse>;
