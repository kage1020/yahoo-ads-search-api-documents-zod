import { z } from 'zod';

export const AdGroupAdServiceRequiredAssets = z.enum(["ENOUGH", "NOT_ENOUGH", "UNKNOWN"]).nullable();

export type AdGroupAdServiceRequiredAssets = z.infer<typeof AdGroupAdServiceRequiredAssets>;
