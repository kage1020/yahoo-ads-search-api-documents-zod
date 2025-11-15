import { z } from 'zod';

export const ssaAccountServiceStatus = z.enum(["INPROGRESS", "WAIT_DECIDE", "SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type SsaAccountServiceStatus = z.infer<typeof ssaAccountServiceStatus>;
