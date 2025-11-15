import { z } from 'zod';

export const adGroupServiceTargetAll = z.enum(["ACTIVE", "DEACTIVE", "UNKNOWN"]).nullable();

export type AdGroupServiceTargetAll = z.infer<typeof adGroupServiceTargetAll>;
