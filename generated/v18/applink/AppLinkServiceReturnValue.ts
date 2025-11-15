import { z } from 'zod';

import { appLinkServiceValue } from './AppLinkServiceValue';

export const appLinkServiceReturnValue = z.object({
  values: z.array(appLinkServiceValue).nullable()
}).nullable();

export type AppLinkServiceReturnValue = z.infer<typeof appLinkServiceReturnValue>;
