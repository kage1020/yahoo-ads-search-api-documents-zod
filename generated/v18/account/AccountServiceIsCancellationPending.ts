import { z } from 'zod';

export const AccountServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceIsCancellationPending = z.infer<typeof AccountServiceIsCancellationPending>;
