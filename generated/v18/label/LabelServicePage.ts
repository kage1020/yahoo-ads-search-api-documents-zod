import { z } from 'zod';

import { LabelServiceValue } from './LabelServiceValue';

export const LabelServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(LabelServiceValue).nullable()
}).nullable();

export type LabelServicePage = z.infer<typeof LabelServicePage>;
