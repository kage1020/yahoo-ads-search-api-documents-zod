import { z } from 'zod';

export const SsaAccountServiceType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type SsaAccountServiceType = z.infer<typeof SsaAccountServiceType>;
