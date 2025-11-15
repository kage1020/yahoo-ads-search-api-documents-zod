import { z } from 'zod';

export const AccountLinkServiceOwnerShipType = z.enum(["OWNER", "NON_OWNER", "UNKNOWN"]).nullable();

export type AccountLinkServiceOwnerShipType = z.infer<typeof AccountLinkServiceOwnerShipType>;
