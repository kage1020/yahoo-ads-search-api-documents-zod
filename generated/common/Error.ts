import { z } from 'zod';

import { ErrorDetail } from './ErrorDetail';

export const Error = z.object({
  code: z.string().nullable(),
  message: z.string().nullable(),
  details: z.array(ErrorDetail).nullable()
}).nullable();

export type Error = z.infer<typeof Error>;
