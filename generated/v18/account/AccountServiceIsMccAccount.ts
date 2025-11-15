import { z } from 'zod';

export const accountServiceIsMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountServiceIsMccAccount = z.infer<typeof accountServiceIsMccAccount>;
