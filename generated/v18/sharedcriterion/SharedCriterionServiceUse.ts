import { z } from 'zod';

export const sharedCriterionServiceUse = z.enum(["NEGATIVE", "UNKNOWN"]).nullable();

export type SharedCriterionServiceUse = z.infer<typeof sharedCriterionServiceUse>;
