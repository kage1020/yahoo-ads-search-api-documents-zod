import { z } from 'zod';

export const BaseAccountServiceIncludeAdminAuth = z.enum(["ONLY_ADMIN", "EXCLUDE_ADMIN", "UNKNOWN"]).nullable();

export type BaseAccountServiceIncludeAdminAuth = z.infer<typeof BaseAccountServiceIncludeAdminAuth>;
