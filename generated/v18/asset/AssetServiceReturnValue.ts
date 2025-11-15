import { z } from 'zod';

import { assetServiceValue } from './AssetServiceValue';

export const assetServiceReturnValue = z.object({
  values: z.array(assetServiceValue).nullable()
}).nullable();

export type AssetServiceReturnValue = z.infer<typeof assetServiceReturnValue>;
