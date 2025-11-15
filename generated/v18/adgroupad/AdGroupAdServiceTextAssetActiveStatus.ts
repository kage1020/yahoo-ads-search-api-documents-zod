import { z } from 'zod';

export const adGroupAdServiceTextAssetActiveStatus = z.enum(["ACTIVE", "DEACTIVE", "PENDING_REVIEW", "PENDING_DELETE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceTextAssetActiveStatus = z.infer<typeof adGroupAdServiceTextAssetActiveStatus>;
