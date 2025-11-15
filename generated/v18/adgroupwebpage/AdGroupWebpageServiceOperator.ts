import { z } from 'zod';

export const AdGroupWebpageServiceOperator = z.enum(["CONTAINS", "EQUALS", "UNKNOWN"]).nullable();

export type AdGroupWebpageServiceOperator = z.infer<typeof AdGroupWebpageServiceOperator>;
