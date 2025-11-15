import { z } from 'zod';

export const ssaAccountServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaAccountServiceIsCancellationPending = z.infer<typeof ssaAccountServiceIsCancellationPending>;
