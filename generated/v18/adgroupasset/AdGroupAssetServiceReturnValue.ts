import { z } from 'zod';

import { AdGroupAssetServiceValue } from './AdGroupAssetServiceValue';

export const AdGroupAssetServiceReturnValue = z.object({
  values: z.array(AdGroupAssetServiceValue).nullable()
}).nullable();

export type AdGroupAssetServiceReturnValue = z.infer<typeof AdGroupAssetServiceReturnValue>;
