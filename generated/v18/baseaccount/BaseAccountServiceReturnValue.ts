import { z } from 'zod';

import { baseAccountServiceValue } from './BaseAccountServiceValue';

export const baseAccountServiceReturnValue = z.object({
  values: z.array(baseAccountServiceValue).nullable()
}).nullable();

export type BaseAccountServiceReturnValue = z.infer<typeof baseAccountServiceReturnValue>;
