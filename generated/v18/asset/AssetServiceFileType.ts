import { z } from 'zod';

export const AssetServiceFileType = z.enum(["PNG", "JPEG", "UNKNOWN"]).nullable();

export type AssetServiceFileType = z.infer<typeof AssetServiceFileType>;
