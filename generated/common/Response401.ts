import { z } from 'zod';

export const Response401 = z.unknown();

export type Response401 = z.infer<typeof Response401>;
