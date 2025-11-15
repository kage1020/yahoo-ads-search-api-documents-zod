import { z } from 'zod';

export const AccountManagementServiceStatus = z.enum(["INPROGRESS", "WAIT_DECIDE", "SUSPENDED", "SERVING", "ENDED", "UNKNOWN"]).nullable();

export type AccountManagementServiceStatus = z.infer<typeof AccountManagementServiceStatus>;
