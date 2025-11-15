import { z } from 'zod';

export const response401 = z.unknown();

export type Response401 = z.infer<typeof response401>;
