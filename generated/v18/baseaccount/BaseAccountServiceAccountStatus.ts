import { z } from 'zod';

export const baseAccountServiceAccountStatus = z.enum(["SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type BaseAccountServiceAccountStatus = z.infer<typeof baseAccountServiceAccountStatus>;
