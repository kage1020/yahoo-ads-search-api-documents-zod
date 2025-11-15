import { z } from 'zod';

export const response403 = z.unknown();

export type Response403 = z.infer<typeof response403>;
