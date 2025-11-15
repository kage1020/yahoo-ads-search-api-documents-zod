import { z } from 'zod';

export const adGroupServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceIsRemove = z.infer<typeof adGroupServiceIsRemove>;
