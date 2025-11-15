import { z } from 'zod';

import { adGroupAdServiceHeadlinePinnedField } from './AdGroupAdServiceHeadlinePinnedField';
import { adGroupAdServiceTextAssetActiveStatus } from './AdGroupAdServiceTextAssetActiveStatus';
import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const adGroupAdServiceHeadlineTextAsset = z.object({
  text: z.string().nullable(),
  pinnedField: adGroupAdServiceHeadlinePinnedField,
  activeStatus: adGroupAdServiceTextAssetActiveStatus,
  approvalStatus: adGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceHeadlineTextAsset = z.infer<typeof adGroupAdServiceHeadlineTextAsset>;
