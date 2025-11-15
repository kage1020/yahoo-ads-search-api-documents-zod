import { z } from 'zod';

export const adGroupCustomizerServiceType = z.enum(["TEXT", "NUMBER", "PRICE", "PERCENT", "UNKNOWN"]).nullable();

export type AdGroupCustomizerServiceType = z.infer<typeof adGroupCustomizerServiceType>;
