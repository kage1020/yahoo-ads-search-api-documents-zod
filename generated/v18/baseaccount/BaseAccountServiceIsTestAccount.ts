import { z } from 'zod';

export const BaseAccountServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsTestAccount = z.infer<typeof BaseAccountServiceIsTestAccount>;
