import { z } from 'zod';

export const baseAccountServiceIsMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsMccAccount = z.infer<typeof baseAccountServiceIsMccAccount>;
