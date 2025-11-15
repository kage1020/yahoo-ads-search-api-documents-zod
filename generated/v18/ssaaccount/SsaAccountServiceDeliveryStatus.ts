import { z } from 'zod';

export const SsaAccountServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type SsaAccountServiceDeliveryStatus = z.infer<typeof SsaAccountServiceDeliveryStatus>;
