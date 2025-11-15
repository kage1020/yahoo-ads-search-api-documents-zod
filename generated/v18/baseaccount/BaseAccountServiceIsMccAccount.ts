import { z } from 'zod';

export const BaseAccountServiceIsMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsMccAccount = z.infer<typeof BaseAccountServiceIsMccAccount>;
