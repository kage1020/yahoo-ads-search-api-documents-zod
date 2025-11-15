import { z } from 'zod';

import { Error } from './Error';
import { CustomizerAttributeServicePage } from './CustomizerAttributeServicePage';

export const CustomizerAttributeServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CustomizerAttributeServicePage
}).nullable();

export type CustomizerAttributeServiceGetResponse = z.infer<typeof CustomizerAttributeServiceGetResponse>;
