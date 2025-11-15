import { z } from 'zod';

export const baseAccountServiceHasAdminAuth = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceHasAdminAuth = z.infer<typeof baseAccountServiceHasAdminAuth>;
