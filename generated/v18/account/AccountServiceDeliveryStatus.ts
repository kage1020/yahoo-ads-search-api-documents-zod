import { z } from 'zod';

export const AccountServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AccountServiceDeliveryStatus = z.infer<typeof AccountServiceDeliveryStatus>;
