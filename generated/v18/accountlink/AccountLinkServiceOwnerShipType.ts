import { z } from 'zod';

export const accountLinkServiceOwnerShipType = z.enum(["OWNER", "NON_OWNER", "UNKNOWN"]).nullable();

export type AccountLinkServiceOwnerShipType = z.infer<typeof accountLinkServiceOwnerShipType>;
