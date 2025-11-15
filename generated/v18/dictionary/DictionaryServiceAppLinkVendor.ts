import { z } from 'zod';

export const DictionaryServiceAppLinkVendor = z.object({
  appVendorId: z.string().nullable(),
  appVendorNameJa: z.string().nullable(),
  appVendorNameEn: z.string().nullable()
}).nullable();

export type DictionaryServiceAppLinkVendor = z.infer<typeof DictionaryServiceAppLinkVendor>;
