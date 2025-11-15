import { z } from 'zod';

export const BaseAccountServiceIsSsaAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsSsaAccount = z.infer<typeof BaseAccountServiceIsSsaAccount>;
