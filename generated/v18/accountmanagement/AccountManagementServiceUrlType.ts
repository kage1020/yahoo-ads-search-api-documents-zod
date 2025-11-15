import { z } from 'zod';

export const AccountManagementServiceUrlType = z.enum(["PC", "DOCOMO", "KDDI", "SOFTBANK", "OTHER", "UNKNOWN"]).nullable();

export type AccountManagementServiceUrlType = z.infer<typeof AccountManagementServiceUrlType>;
