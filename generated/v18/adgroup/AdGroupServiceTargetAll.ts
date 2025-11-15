import { z } from 'zod';

export const AdGroupServiceTargetAll = z.enum(["ACTIVE", "DEACTIVE", "UNKNOWN"]).nullable();

export type AdGroupServiceTargetAll = z.infer<typeof AdGroupServiceTargetAll>;
