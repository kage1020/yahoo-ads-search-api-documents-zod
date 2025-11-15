import { z } from 'zod';

export const Response500 = z.unknown();

export type Response500 = z.infer<typeof Response500>;
