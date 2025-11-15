import { z } from 'zod';

import { errorDetail } from './ErrorDetail';

export const error = z.object({
  code: z.string().nullable(),
  message: z.string().nullable(),
  details: z.array(errorDetail).nullable()
}).nullable();

export type Error = z.infer<typeof error>;
