import { z } from 'zod';

export const DictionaryServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type DictionaryServiceLang = z.infer<typeof DictionaryServiceLang>;
