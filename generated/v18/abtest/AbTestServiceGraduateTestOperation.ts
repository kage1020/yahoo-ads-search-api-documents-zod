import { z } from 'zod';

import { abTestServiceGraduateTest } from './AbTestServiceGraduateTest';

export const abTestServiceGraduateTestOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(abTestServiceGraduateTest).nullable()
}).nullable();

export type AbTestServiceGraduateTestOperation = z.infer<typeof abTestServiceGraduateTestOperation>;
