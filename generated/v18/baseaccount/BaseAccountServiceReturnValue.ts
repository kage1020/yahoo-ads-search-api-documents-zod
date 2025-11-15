import { z } from 'zod';

import { BaseAccountServiceValue } from './BaseAccountServiceValue';

export const BaseAccountServiceReturnValue = z.object({
  values: z.array(BaseAccountServiceValue).nullable()
}).nullable();

export type BaseAccountServiceReturnValue = z.infer<typeof BaseAccountServiceReturnValue>;
