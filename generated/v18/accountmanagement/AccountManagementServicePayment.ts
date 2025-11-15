import { z } from 'zod';

import { AccountManagementServiceInvoice } from './AccountManagementServiceInvoice';
import { AccountManagementServicePaymentType } from './AccountManagementServicePaymentType';

export const AccountManagementServicePayment = z.object({
  invoice: AccountManagementServiceInvoice,
  paymentType: AccountManagementServicePaymentType
}).nullable();

export type AccountManagementServicePayment = z.infer<typeof AccountManagementServicePayment>;
