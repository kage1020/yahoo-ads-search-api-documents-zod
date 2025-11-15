import { z } from 'zod';

export const accountManagementServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountManagementServiceIsCancellationPending = z.infer<typeof accountManagementServiceIsCancellationPending>;
