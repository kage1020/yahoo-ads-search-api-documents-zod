import { z } from 'zod';

import { AdGroupAdServiceIsRemove } from './AdGroupAdServiceIsRemove';
import { AdGroupAdServiceCustomParameter } from './AdGroupAdServiceCustomParameter';

export const AdGroupAdServiceCustomParameters = z.object({
  isRemove: AdGroupAdServiceIsRemove,
  parameters: z.array(AdGroupAdServiceCustomParameter).nullable()
}).nullable();

export type AdGroupAdServiceCustomParameters = z.infer<typeof AdGroupAdServiceCustomParameters>;
