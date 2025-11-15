import { z } from 'zod';

export const ssaAccountServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type SsaAccountServiceDeliveryStatus = z.infer<typeof ssaAccountServiceDeliveryStatus>;
