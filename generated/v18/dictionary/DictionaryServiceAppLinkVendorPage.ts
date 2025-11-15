import { z } from 'zod';

import { dictionaryServiceAppLinkVendorValue } from './DictionaryServiceAppLinkVendorValue';

export const dictionaryServiceAppLinkVendorPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceAppLinkVendorValue).nullable()
}).nullable();

export type DictionaryServiceAppLinkVendorPage = z.infer<typeof dictionaryServiceAppLinkVendorPage>;
