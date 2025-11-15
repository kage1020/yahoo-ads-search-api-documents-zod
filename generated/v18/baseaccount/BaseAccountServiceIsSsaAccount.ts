import { z } from 'zod';

export const baseAccountServiceIsSsaAccount = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceIsSsaAccount = z.infer<typeof baseAccountServiceIsSsaAccount>;
