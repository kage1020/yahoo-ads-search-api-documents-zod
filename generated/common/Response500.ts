import { z } from 'zod';

export const response500 = z.unknown();

export type Response500 = z.infer<typeof response500>;
