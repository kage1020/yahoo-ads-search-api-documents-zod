import { z } from 'zod';

import { assetServiceValue } from './AssetServiceValue';

export const assetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(assetServiceValue).nullable()
}).nullable();

export type AssetServicePage = z.infer<typeof assetServicePage>;
