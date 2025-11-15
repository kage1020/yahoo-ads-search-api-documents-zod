import { z } from 'zod';

export const baseAccountServiceIsRootMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsRootMccAccount = z.infer<typeof baseAccountServiceIsRootMccAccount>;
