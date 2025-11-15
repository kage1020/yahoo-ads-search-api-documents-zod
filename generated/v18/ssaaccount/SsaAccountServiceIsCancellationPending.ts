import { z } from 'zod';

export const SsaAccountServiceIsCancellationPending = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaAccountServiceIsCancellationPending = z.infer<typeof SsaAccountServiceIsCancellationPending>;
