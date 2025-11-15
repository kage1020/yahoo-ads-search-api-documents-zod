import { z } from 'zod';

export const customizerAttributeServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type CustomizerAttributeServiceType = z.infer<typeof customizerAttributeServiceType>;
