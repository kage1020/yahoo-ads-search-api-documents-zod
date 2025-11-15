import { z } from 'zod';

export const AccountManagementServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsCancellationPending = z.infer<typeof AccountManagementServiceIsCancellationPending>;
