import { z } from 'zod';

export const ssaAccountServiceType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type SsaAccountServiceType = z.infer<typeof ssaAccountServiceType>;
