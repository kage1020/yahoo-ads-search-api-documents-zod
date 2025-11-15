import { z } from 'zod';

export const AccountServiceType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type AccountServiceType = z.infer<typeof AccountServiceType>;
