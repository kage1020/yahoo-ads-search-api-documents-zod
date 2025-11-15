import { z } from 'zod';

export const AccountManagementServicePaymentType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type AccountManagementServicePaymentType = z.infer<typeof AccountManagementServicePaymentType>;
