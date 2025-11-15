import { z } from 'zod';

export const dictionaryServiceGeographicLocationStatus = z.enum(["ACTIVE", "OBSOLETE", "PHASING_OUT", "UNKNOWN"]).nullable();

export type DictionaryServiceGeographicLocationStatus = z.infer<typeof dictionaryServiceGeographicLocationStatus>;
