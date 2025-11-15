import { z } from 'zod';

export const accountServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AccountServiceDeliveryStatus = z.infer<typeof accountServiceDeliveryStatus>;
