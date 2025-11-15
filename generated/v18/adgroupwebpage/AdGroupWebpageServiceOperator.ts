import { z } from 'zod';

export const adGroupWebpageServiceOperator = z.enum(["CONTAINS", "EQUALS", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceOperator = z.infer<typeof adGroupWebpageServiceOperator>;
