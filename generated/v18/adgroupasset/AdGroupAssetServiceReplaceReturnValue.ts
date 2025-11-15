import { z } from 'zod';

import { adGroupAssetServiceReplaceValue } from './AdGroupAssetServiceReplaceValue';

export const adGroupAssetServiceReplaceReturnValue = z.object({
  values: z.array(adGroupAssetServiceReplaceValue).nullable()
}).nullable();

export type AdGroupAssetServiceReplaceReturnValue = z.infer<typeof adGroupAssetServiceReplaceReturnValue>;
