import { z } from 'zod';

export const accountServiceIsTestAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceIsTestAccount = z.infer<typeof accountServiceIsTestAccount>;
