import { z } from 'zod';

export const AccountManagementServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AccountManagementServiceDeliveryStatus = z.infer<typeof AccountManagementServiceDeliveryStatus>;
