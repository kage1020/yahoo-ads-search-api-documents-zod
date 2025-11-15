import { z } from 'zod';

import { dictionaryServiceAppLinkVendor } from './DictionaryServiceAppLinkVendor';
import { error } from '../../common/Error';

export const dictionaryServiceAppLinkVendorValue = z.object({
  appLinkVendor: dictionaryServiceAppLinkVendor,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceAppLinkVendorValue = z.infer<typeof dictionaryServiceAppLinkVendorValue>;
