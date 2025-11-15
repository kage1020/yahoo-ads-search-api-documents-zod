import { z } from 'zod';

export const dictionaryServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type DictionaryServiceLang = z.infer<typeof dictionaryServiceLang>;
