import { z } from 'zod';

import { assetServiceIsRemove } from './AssetServiceIsRemove';
import { assetServiceCustomParameter } from './AssetServiceCustomParameter';

export const assetServiceCustomParameters = z.object({
  isRemove: assetServiceIsRemove,
  parameters: z.array(assetServiceCustomParameter).nullable()
}).nullable();

export type AssetServiceCustomParameters = z.infer<typeof assetServiceCustomParameters>;
