import { z } from 'zod';

export const accountServiceType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type AccountServiceType = z.infer<typeof accountServiceType>;
