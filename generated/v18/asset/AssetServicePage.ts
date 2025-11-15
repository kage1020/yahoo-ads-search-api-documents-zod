import { z } from 'zod';

import { AssetServiceValue } from './AssetServiceValue';

export const AssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AssetServiceValue).nullable()
}).nullable();

export type AssetServicePage = z.infer<typeof AssetServicePage>;
