import { z } from 'zod';

export const AdGroupAdServiceTextAssetActiveStatus = z.enum(["ACTIVE", "DEACTIVE", "PENDING_REVIEW", "PENDING_DELETE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceTextAssetActiveStatus = z.infer<typeof AdGroupAdServiceTextAssetActiveStatus>;
