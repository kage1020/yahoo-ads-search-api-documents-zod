import { z } from 'zod';

export const AdGroupCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AdGroupCustomizerServiceType = z.infer<typeof AdGroupCustomizerServiceType>;
