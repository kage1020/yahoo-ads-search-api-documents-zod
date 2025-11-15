import { z } from 'zod';

import { adGroupAssetServiceValue } from './AdGroupAssetServiceValue';

export const adGroupAssetServiceReturnValue = z.object({
  values: z.array(adGroupAssetServiceValue).nullable()
}).nullable();

export type AdGroupAssetServiceReturnValue = z.infer<typeof adGroupAssetServiceReturnValue>;
