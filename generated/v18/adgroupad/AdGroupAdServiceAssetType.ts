import { z } from 'zod';

export const adGroupAdServiceAssetType = z.enum(["HEADLINE", "DESCRIPTION", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAssetType = z.infer<typeof adGroupAdServiceAssetType>;
