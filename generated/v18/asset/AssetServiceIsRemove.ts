import { z } from 'zod';

export const assetServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AssetServiceIsRemove = z.infer<typeof assetServiceIsRemove>;
