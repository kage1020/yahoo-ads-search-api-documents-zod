import { z } from 'zod';

export const SsaAccountServiceAutoTaggingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaAccountServiceAutoTaggingEnabled = z.infer<typeof SsaAccountServiceAutoTaggingEnabled>;
