import { z } from 'zod';

export const assetServiceType = z.enum(["QUICKLINK", "CALL", "CALLOUT", "STRUCTURED_SNIPPET", "IMAGE", "FAVICON", "UNKNOWN"]).nullable();

export type AssetServiceType = z.infer<typeof assetServiceType>;
