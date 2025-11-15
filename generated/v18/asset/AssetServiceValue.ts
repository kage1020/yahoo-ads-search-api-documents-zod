import { z } from 'zod';

import { error } from '../../common/Error';
import { asset } from './Asset';

export const assetServiceValue = z.object({
  errors: z.array(error).nullable(),
  asset: asset,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AssetServiceValue = z.infer<typeof assetServiceValue>;
