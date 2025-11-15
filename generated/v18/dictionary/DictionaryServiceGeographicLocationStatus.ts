import { z } from 'zod';

export const DictionaryServiceGeographicLocationStatus = z.enum(["ACTIVE", "OBSOLETE", "PHASING_OUT", "UNKNOWN"]).nullable();

export type DictionaryServiceGeographicLocationStatus = z.infer<typeof DictionaryServiceGeographicLocationStatus>;
