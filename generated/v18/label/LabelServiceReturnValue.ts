import { z } from 'zod';

import { LabelServiceValue } from './LabelServiceValue';

export const LabelServiceReturnValue = z.object({
  values: z.array(LabelServiceValue).nullable()
}).nullable();

export type LabelServiceReturnValue = z.infer<typeof LabelServiceReturnValue>;
