import { z } from 'zod';

export const accountServiceAutoTaggingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceAutoTaggingEnabled = z.infer<typeof accountServiceAutoTaggingEnabled>;
