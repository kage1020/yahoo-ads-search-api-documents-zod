import { z } from 'zod';

export const accountManagementServiceInvoice = z.object({
  budgetAmount: z.number().int().nullable(),
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type AccountManagementServiceInvoice = z.infer<typeof accountManagementServiceInvoice>;
