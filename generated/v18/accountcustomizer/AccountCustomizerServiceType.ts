import { z } from 'zod';

export const AccountCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AccountCustomizerServiceType = z.infer<typeof AccountCustomizerServiceType>;
