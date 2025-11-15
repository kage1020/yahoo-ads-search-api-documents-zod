import { z } from 'zod';

export const AccountLinkServiceAccountStatus = z.enum(["INPROGRESS", "WAIT_DECIDE", "SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type AccountLinkServiceAccountStatus = z.infer<typeof AccountLinkServiceAccountStatus>;
