import { z } from 'zod';

export const response503 = z.unknown();

export type Response503 = z.infer<typeof response503>;
