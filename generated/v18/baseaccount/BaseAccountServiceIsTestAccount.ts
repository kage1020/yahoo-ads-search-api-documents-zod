import { z } from 'zod';

export const baseAccountServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsTestAccount = z.infer<typeof baseAccountServiceIsTestAccount>;
