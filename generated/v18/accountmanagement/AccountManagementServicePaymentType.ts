import { z } from 'zod';

export const accountManagementServicePaymentType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type AccountManagementServicePaymentType = z.infer<typeof accountManagementServicePaymentType>;
