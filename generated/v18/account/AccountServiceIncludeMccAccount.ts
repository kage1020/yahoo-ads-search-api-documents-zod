import { z } from 'zod';

export const accountServiceIncludeMccAccount = z.enum(["ONLY_MCC_ACCOUNT", "ONLY_ADS_ACCOUNT", "UNKNOWN"]).nullable();

export type AccountServiceIncludeMccAccount = z.infer<typeof accountServiceIncludeMccAccount>;
