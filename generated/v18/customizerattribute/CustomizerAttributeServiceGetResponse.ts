import { z } from 'zod';

import { error } from '../../common/Error';
import { customizerAttributeServicePage } from './CustomizerAttributeServicePage';

export const customizerAttributeServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: customizerAttributeServicePage
}).nullable();

export type CustomizerAttributeServiceGetResponse = z.infer<typeof customizerAttributeServiceGetResponse>;
