import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetSetServiceReturnValue } from './PageFeedAssetSetServiceReturnValue';

export const pageFeedAssetSetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetSetServiceReturnValue
}).nullable();

export type PageFeedAssetSetServiceMutateResponse = z.infer<typeof pageFeedAssetSetServiceMutateResponse>;
