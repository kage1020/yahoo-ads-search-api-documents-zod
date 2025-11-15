import { z } from 'zod';

export const SharedCriterionServiceUse = z.enum(["NEGATIVE", "UNKNOWN"]).nullable();

export type SharedCriterionServiceUse = z.infer<typeof SharedCriterionServiceUse>;
