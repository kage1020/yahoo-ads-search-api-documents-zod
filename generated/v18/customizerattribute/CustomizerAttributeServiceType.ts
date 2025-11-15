import { z } from 'zod';

export const CustomizerAttributeServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type CustomizerAttributeServiceType = z.infer<typeof CustomizerAttributeServiceType>;
