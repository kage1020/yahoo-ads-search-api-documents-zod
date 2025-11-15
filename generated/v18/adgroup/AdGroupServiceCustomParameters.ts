import { z } from 'zod';

import { AdGroupServiceIsRemove } from './AdGroupServiceIsRemove';
import { AdGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const AdGroupServiceCustomParameters = z.object({
  isRemove: AdGroupServiceIsRemove,
  parameters: z.array(AdGroupServiceCustomParameter).nullable()
}).nullable();

export type AdGroupServiceCustomParameters = z.infer<typeof AdGroupServiceCustomParameters>;
