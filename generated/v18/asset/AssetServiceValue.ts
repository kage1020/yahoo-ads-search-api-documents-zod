import { z } from 'zod';

import { Error } from './Error';
import { Asset } from './Asset';

export const AssetServiceValue = z.object({
  errors: z.array(Error).nullable(),
  asset: Asset,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AssetServiceValue = z.infer<typeof AssetServiceValue>;
