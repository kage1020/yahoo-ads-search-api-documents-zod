import { z } from 'zod';

import { AbTestServiceGraduateTest } from './AbTestServiceGraduateTest';

export const AbTestServiceGraduateTestOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AbTestServiceGraduateTest).nullable()
}).nullable();

export type AbTestServiceGraduateTestOperation = z.infer<typeof AbTestServiceGraduateTestOperation>;
