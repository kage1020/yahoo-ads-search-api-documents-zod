import { z } from 'zod';

import { AdGroupAssetServiceReplaceValue } from './AdGroupAssetServiceReplaceValue';

export const AdGroupAssetServiceReplaceReturnValue = z.object({
  values: z.array(AdGroupAssetServiceReplaceValue).nullable()
}).nullable();

export type AdGroupAssetServiceReplaceReturnValue = z.infer<typeof AdGroupAssetServiceReplaceReturnValue>;
