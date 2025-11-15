import { z } from 'zod';

export const ssaAccountServiceAutoTaggingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaAccountServiceAutoTaggingEnabled = z.infer<typeof ssaAccountServiceAutoTaggingEnabled>;
