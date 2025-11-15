import { z } from 'zod';

export const response400 = z.unknown();

export type Response400 = z.infer<typeof response400>;
