import { z } from 'zod';

import { Error } from './Error';
import { AssetServicePage } from './AssetServicePage';

export const AssetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AssetServicePage
}).nullable();

export type AssetServiceGetResponse = z.infer<typeof AssetServiceGetResponse>;
