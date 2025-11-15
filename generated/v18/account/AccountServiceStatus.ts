import { z } from 'zod';

export const AccountServiceStatus = z.enum(["INPROGRESS", "WAIT_DECIDE", "SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type AccountServiceStatus = z.infer<typeof AccountServiceStatus>;
