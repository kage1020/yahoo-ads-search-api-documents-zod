import { z } from 'zod';

import { AbTestServiceBudget } from './AbTestServiceBudget';

export const AbTestServiceGraduateTest = z.object({
  abTestId: z.number().int().nullable(),
  budget: AbTestServiceBudget
}).nullable();

export type AbTestServiceGraduateTest = z.infer<typeof AbTestServiceGraduateTest>;
