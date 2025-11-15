import { z } from 'zod';

export const baseAccountServiceAuthType = z.enum(["REFERABLE", "UPDATABLE", "UNKNOWN"]).nullable();

export type BaseAccountServiceAuthType = z.infer<typeof baseAccountServiceAuthType>;
