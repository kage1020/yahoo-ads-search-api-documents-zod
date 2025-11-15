import { z } from 'zod';

export const accountManagementServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AccountManagementServiceDeliveryStatus = z.infer<typeof accountManagementServiceDeliveryStatus>;
