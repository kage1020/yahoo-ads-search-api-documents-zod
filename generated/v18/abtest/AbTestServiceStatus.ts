import { z } from 'zod';

export const abTestServiceStatus = z.enum(["PENDING", "ACTIVE", "ENDED", "GRADUATED", "ERROR", "UNKNOWN"]).nullable();

export type AbTestServiceStatus = z.infer<typeof abTestServiceStatus>;
