import { z } from 'zod';

import { adGroupCriterionServiceApprovalStatus } from './AdGroupCriterionServiceApprovalStatus';
import { adGroupCriterionServiceBid } from './AdGroupCriterionServiceBid';
import { adGroupCriterionServiceCustomParameters } from './AdGroupCriterionServiceCustomParameters';
import { adGroupCriterionServiceUserStatus } from './AdGroupCriterionServiceUserStatus';

export const adGroupCriterionServiceBiddableAdGroupCriterion = z.object({
  smartphoneFinalUrl: z.string().nullable(),
  finalUrl: z.string().nullable(),
  approvalStatus: adGroupCriterionServiceApprovalStatus,
  bid: adGroupCriterionServiceBid,
  customParameters: adGroupCriterionServiceCustomParameters,
  destinationUrl: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  reviewSmartphoneFinalUrl: z.string().nullable(),
  reviewFinalUrl: z.string().nullable(),
  reviewCustomParameters: adGroupCriterionServiceCustomParameters,
  reviewDestinationUrl: z.string().nullable(),
  reviewTrackingUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  userStatus: adGroupCriterionServiceUserStatus
}).nullable();

export type AdGroupCriterionServiceBiddableAdGroupCriterion = z.infer<typeof adGroupCriterionServiceBiddableAdGroupCriterion>;
