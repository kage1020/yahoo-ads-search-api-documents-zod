import { z } from 'zod';

export const AssetServiceIsRemove = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AssetServiceIsRemove = z.infer<typeof AssetServiceIsRemove>;
