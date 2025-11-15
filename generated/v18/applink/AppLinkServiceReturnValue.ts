import { z } from 'zod';

import { AppLinkServiceValue } from './AppLinkServiceValue';

export const AppLinkServiceReturnValue = z.object({
  values: z.array(AppLinkServiceValue).nullable()
}).nullable();

export type AppLinkServiceReturnValue = z.infer<typeof AppLinkServiceReturnValue>;
