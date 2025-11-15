import { z } from 'zod';

export const adGroupAdServiceRequiredAssets = z.enum(["ENOUGH", "NOT_ENOUGH", "UNKNOWN"]).nullable();

export type AdGroupAdServiceRequiredAssets = z.infer<typeof adGroupAdServiceRequiredAssets>;
