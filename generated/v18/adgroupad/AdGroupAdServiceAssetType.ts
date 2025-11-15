import { z } from 'zod';

export const AdGroupAdServiceAssetType = z.enum(["HEADLINE", "DESCRIPTION", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAssetType = z.infer<typeof AdGroupAdServiceAssetType>;
