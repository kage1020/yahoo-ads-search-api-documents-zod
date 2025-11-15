import { z } from 'zod';

export const AccountServiceAutoTaggingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AccountServiceAutoTaggingEnabled = z.infer<typeof AccountServiceAutoTaggingEnabled>;
