import { z } from 'zod';

export const accountCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AccountCustomizerServiceType = z.infer<typeof accountCustomizerServiceType>;
