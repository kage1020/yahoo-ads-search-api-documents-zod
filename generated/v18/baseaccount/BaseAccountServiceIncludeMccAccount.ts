import { z } from 'zod';

export const baseAccountServiceIncludeMccAccount = z.enum(["ONLY_MCC", "ONLY_ROOT_MCC", "ONLY_ADS_ACCOUNT", "ALL", "UNKNOWN"]).nullable();

export type BaseAccountServiceIncludeMccAccount = z.infer<typeof baseAccountServiceIncludeMccAccount>;
