import { z } from 'zod';

export const BaseAccountServiceAccountStatus = z.enum(["SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type BaseAccountServiceAccountStatus = z.infer<typeof BaseAccountServiceAccountStatus>;
