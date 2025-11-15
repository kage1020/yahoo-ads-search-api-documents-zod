import { z } from 'zod';

export const AssetServiceType = z.enum(["QUICKLINK", "CALL", "CALLOUT", "STRUCTURED_SNIPPET", "IMAGE", "FAVICON", "UNKNOWN"]).nullable();

export type AssetServiceType = z.infer<typeof AssetServiceType>;
