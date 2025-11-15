import { z } from 'zod';

export const dictionaryServiceAppLinkVendor = z.object({
  appVendorId: z.string().nullable(),
  appVendorNameJa: z.string().nullable(),
  appVendorNameEn: z.string().nullable()
}).nullable();

export type DictionaryServiceAppLinkVendor = z.infer<typeof dictionaryServiceAppLinkVendor>;
