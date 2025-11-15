import { z } from 'zod';

import { AdGroupCriterionServiceApprovalStatus } from './AdGroupCriterionServiceApprovalStatus';
import { AdGroupCriterionServiceBid } from './AdGroupCriterionServiceBid';
import { AdGroupCriterionServiceCustomParameters } from './AdGroupCriterionServiceCustomParameters';
import { AdGroupCriterionServiceUserStatus } from './AdGroupCriterionServiceUserStatus';

export const AdGroupCriterionServiceBiddableAdGroupCriterion = z.object({
  smartphoneFinalUrl: z.string().nullable(),
  finalUrl: z.string().nullable(),
  approvalStatus: AdGroupCriterionServiceApprovalStatus,
  bid: AdGroupCriterionServiceBid,
  customParameters: AdGroupCriterionServiceCustomParameters,
  destinationUrl: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  reviewCustomParameters: AdGroupCriterionServiceCustomParameters,
  reviewDestinationUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  userStatus: AdGroupCriterionServiceUserStatus
}).nullable();

export type AdGroupCriterionServiceBiddableAdGroupCriterion = z.infer<typeof AdGroupCriterionServiceBiddableAdGroupCriterion>;
