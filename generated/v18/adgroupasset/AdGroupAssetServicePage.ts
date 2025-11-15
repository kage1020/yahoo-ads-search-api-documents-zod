import { z } from 'zod';

import { AdGroupAssetServiceValue } from './AdGroupAssetServiceValue';

export const AdGroupAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AdGroupAssetServiceValue).nullable()
}).nullable();

export type AdGroupAssetServicePage = z.infer<typeof AdGroupAssetServicePage>;
