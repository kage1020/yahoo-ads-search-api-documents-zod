import { z } from 'zod';

export const adGroupWebpageServiceExcludedType = z.enum(["INCLUDED", "EXCLUDED", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceExcludedType = z.infer<typeof adGroupWebpageServiceExcludedType>;
