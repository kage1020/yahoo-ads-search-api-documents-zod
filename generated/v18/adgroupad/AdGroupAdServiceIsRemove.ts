import { z } from 'zod';

export const AdGroupAdServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceIsRemove = z.infer<typeof AdGroupAdServiceIsRemove>;
