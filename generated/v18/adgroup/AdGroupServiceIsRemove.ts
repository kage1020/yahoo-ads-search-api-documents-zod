import { z } from 'zod';

export const AdGroupServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceIsRemove = z.infer<typeof AdGroupServiceIsRemove>;
