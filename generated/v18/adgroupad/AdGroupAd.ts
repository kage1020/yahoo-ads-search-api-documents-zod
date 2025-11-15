import { z } from 'zod';

import { AdGroupAdServiceAd } from './AdGroupAdServiceAd';
import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { AdGroupAdServiceLabel } from './AdGroupAdServiceLabel';
import { AdGroupAdServiceTrademarkStatus } from './AdGroupAdServiceTrademarkStatus';
import { AdGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';

export const AdGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: AdGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adGroupTrackId: z.number().int().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  adTrackId: z.number().int().nullable(),
  approvalStatus: AdGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  campaignTrackId: z.number().int().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  feedId: z.number().int().nullable(),
  invalidedTrademarks: z.array(z.string().nullable()).nullable(),
  labels: z.array(AdGroupAdServiceLabel).nullable(),
  trademarkStatus: AdGroupAdServiceTrademarkStatus,
  userStatus: AdGroupAdServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroupAd = z.infer<typeof AdGroupAd>;
