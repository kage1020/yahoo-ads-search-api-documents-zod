import { z } from 'zod';

import { adGroupAssetServiceValue } from './AdGroupAssetServiceValue';

export const adGroupAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupAssetServiceValue).nullable()
}).nullable();

export type AdGroupAssetServicePage = z.infer<typeof adGroupAssetServicePage>;
