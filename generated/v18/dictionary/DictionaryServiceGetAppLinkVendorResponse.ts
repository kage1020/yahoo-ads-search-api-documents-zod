import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceAppLinkVendorPage } from './DictionaryServiceAppLinkVendorPage';

export const dictionaryServiceGetAppLinkVendorResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceAppLinkVendorPage
}).nullable();

export type DictionaryServiceGetAppLinkVendorResponse = z.infer<typeof dictionaryServiceGetAppLinkVendorResponse>;
