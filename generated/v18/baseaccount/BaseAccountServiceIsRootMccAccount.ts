import { z } from 'zod';

export const BaseAccountServiceIsRootMccAccount = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsRootMccAccount = z.infer<typeof BaseAccountServiceIsRootMccAccount>;
