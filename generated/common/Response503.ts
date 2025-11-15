import { z } from 'zod';

export const Response503 = z.unknown();

export type Response503 = z.infer<typeof Response503>;
