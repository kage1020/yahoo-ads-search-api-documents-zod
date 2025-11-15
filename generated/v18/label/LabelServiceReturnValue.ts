import { z } from 'zod';

import { labelServiceValue } from './LabelServiceValue';

export const labelServiceReturnValue = z.object({
  values: z.array(labelServiceValue).nullable()
}).nullable();

export type LabelServiceReturnValue = z.infer<typeof labelServiceReturnValue>;
