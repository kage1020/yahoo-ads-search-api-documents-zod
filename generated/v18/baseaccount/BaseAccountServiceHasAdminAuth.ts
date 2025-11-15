import { z } from 'zod';

export const BaseAccountServiceHasAdminAuth = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BaseAccountServiceHasAdminAuth = z.infer<typeof BaseAccountServiceHasAdminAuth>;
