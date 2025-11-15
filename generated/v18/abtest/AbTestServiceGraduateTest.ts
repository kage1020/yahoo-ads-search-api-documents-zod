import { z } from 'zod';

import { abTestServiceBudget } from './AbTestServiceBudget';

export const abTestServiceGraduateTest = z.object({
  abTestId: z.number().int().nullable(),
  budget: abTestServiceBudget
}).nullable();

export type AbTestServiceGraduateTest = z.infer<typeof abTestServiceGraduateTest>;
