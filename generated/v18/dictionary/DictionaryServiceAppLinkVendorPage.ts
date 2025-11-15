import { z } from 'zod';

import { DictionaryServiceAppLinkVendorValue } from './DictionaryServiceAppLinkVendorValue';

export const DictionaryServiceAppLinkVendorPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceAppLinkVendorValue).nullable()
}).nullable();

export type DictionaryServiceAppLinkVendorPage = z.infer<typeof DictionaryServiceAppLinkVendorPage>;
