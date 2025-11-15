import { z } from 'zod';

export const AccountServiceIsMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountServiceIsMccAccount = z.infer<typeof AccountServiceIsMccAccount>;
