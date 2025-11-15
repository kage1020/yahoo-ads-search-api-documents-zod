import { z } from 'zod';

export const accountServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceIsCancellationPending = z.infer<typeof accountServiceIsCancellationPending>;
