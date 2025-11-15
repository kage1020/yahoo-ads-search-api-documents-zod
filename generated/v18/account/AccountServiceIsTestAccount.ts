import { z } from 'zod';

export const AccountServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceIsTestAccount = z.infer<typeof AccountServiceIsTestAccount>;
