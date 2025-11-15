import { z } from 'zod';

import { AssetServiceValue } from './AssetServiceValue';

export const AssetServiceReturnValue = z.object({
  values: z.array(AssetServiceValue).nullable()
}).nullable();

export type AssetServiceReturnValue = z.infer<typeof AssetServiceReturnValue>;
