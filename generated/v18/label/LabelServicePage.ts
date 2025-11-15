import { z } from 'zod';

import { labelServiceValue } from './LabelServiceValue';

export const labelServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(labelServiceValue).nullable()
}).nullable();

export type LabelServicePage = z.infer<typeof labelServicePage>;
