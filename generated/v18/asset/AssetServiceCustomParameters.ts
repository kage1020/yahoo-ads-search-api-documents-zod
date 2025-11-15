import { z } from 'zod';

import { AssetServiceIsRemove } from './AssetServiceIsRemove';
import { AssetServiceCustomParameter } from './AssetServiceCustomParameter';

export const AssetServiceCustomParameters = z.object({
  isRemove: AssetServiceIsRemove,
  parameters: z.array(AssetServiceCustomParameter).nullable()
}).nullable();

export type AssetServiceCustomParameters = z.infer<typeof AssetServiceCustomParameters>;
