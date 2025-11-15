import { z } from 'zod';

export const AdGroupWebpageServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceExcludedType = z.infer<typeof AdGroupWebpageServiceExcludedType>;
