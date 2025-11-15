import { z } from 'zod';

export const AdGroupAssetServiceType = z.enum(["QUICKLINK", "CALL", "CALLOUT", "STRUCTURED_SNIPPET", "IMAGE", "UNKNOWN"]).nullable();

export type AdGroupAssetServiceType = z.infer<typeof AdGroupAssetServiceType>;
