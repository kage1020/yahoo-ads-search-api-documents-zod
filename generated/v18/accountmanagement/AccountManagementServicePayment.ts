import { z } from 'zod';

import { accountManagementServiceInvoice } from './AccountManagementServiceInvoice';
import { accountManagementServicePaymentType } from './AccountManagementServicePaymentType';

export const accountManagementServicePayment = z.object({
  invoice: accountManagementServiceInvoice,
  paymentType: accountManagementServicePaymentType
}).nullable();

export type AccountManagementServicePayment = z.infer<typeof accountManagementServicePayment>;
