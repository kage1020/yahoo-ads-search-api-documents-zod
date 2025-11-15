import { z } from 'zod';

import { DictionaryServiceAppLinkVendor } from './DictionaryServiceAppLinkVendor';
import { Error } from './Error';

export const DictionaryServiceAppLinkVendorValue = z.object({
  appLinkVendor: DictionaryServiceAppLinkVendor,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceAppLinkVendorValue = z.infer<typeof DictionaryServiceAppLinkVendorValue>;
