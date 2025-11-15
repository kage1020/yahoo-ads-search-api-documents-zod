import { z } from 'zod';

export const BaseAccountServiceAuthType = z.enum(["REFERABLE", "UPDATABLE", "UNKNOWN"]).nullable();

export type BaseAccountServiceAuthType = z.infer<typeof BaseAccountServiceAuthType>;
