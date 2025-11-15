import { z } from 'zod';

export const adGroupAdServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceIsRemove = z.infer<typeof adGroupAdServiceIsRemove>;
