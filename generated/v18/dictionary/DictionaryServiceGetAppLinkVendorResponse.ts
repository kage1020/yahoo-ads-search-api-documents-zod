import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceAppLinkVendorPage } from './DictionaryServiceAppLinkVendorPage';

export const DictionaryServiceGetAppLinkVendorResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceAppLinkVendorPage
}).nullable();

export type DictionaryServiceGetAppLinkVendorResponse = z.infer<typeof DictionaryServiceGetAppLinkVendorResponse>;
