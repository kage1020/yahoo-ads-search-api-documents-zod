import { z } from 'zod';

export const dictionaryServiceAppLinkVendorSelector = z.object({
  numberResults: z.number().int().min(1).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type DictionaryServiceAppLinkVendorSelector = z.infer<typeof dictionaryServiceAppLinkVendorSelector>;
