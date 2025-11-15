import { z } from 'zod';

export const adGroupAssetServiceType = z.enum(["QUICKLINK", "CALL", "CALLOUT", "STRUCTURED_SNIPPET", "IMAGE", "UNKNOWN"]).nullable();

export type AdGroupAssetServiceType = z.infer<typeof adGroupAssetServiceType>;
