import { z } from 'zod';

export const assetServiceFileType = z.enum(["PNG", "JPEG", "UNKNOWN"]).nullable();

export type AssetServiceFileType = z.infer<typeof assetServiceFileType>;
