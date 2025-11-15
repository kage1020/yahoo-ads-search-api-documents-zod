import { z } from 'zod';

import { adGroupAdServiceAd } from './AdGroupAdServiceAd';
import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { adGroupAdServiceLabel } from './AdGroupAdServiceLabel';
import { adGroupAdServiceTrademarkStatus } from './AdGroupAdServiceTrademarkStatus';
import { adGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';

export const adGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: adGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  adTrackId: z.number().int().nullable(),
  approvalStatus: adGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  feedId: z.number().int().nullable(),
  invalidedTrademarks: z.array(z.string().nullable()).nullable(),
  labels: z.array(adGroupAdServiceLabel).nullable(),
  trademarkStatus: adGroupAdServiceTrademarkStatus,
  userStatus: adGroupAdServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroupAd = z.infer<typeof adGroupAd>;
