import { z } from 'zod';

export const Response400 = z.unknown();

export type Response400 = z.infer<typeof Response400>;
