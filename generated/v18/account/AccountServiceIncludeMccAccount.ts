import { z } from 'zod';

export const AccountServiceIncludeMccAccount = z.enum(["ONLY_MCC_ACCOUNT", "ONLY_ADS_ACCOUNT", "UNKNOWN"]).nullable();

export type AccountServiceIncludeMccAccount = z.infer<typeof AccountServiceIncludeMccAccount>;
