import { z } from 'zod';

import { AdGroupAdServiceHeadlinePinnedField } from './AdGroupAdServiceHeadlinePinnedField';
import { AdGroupAdServiceTextAssetActiveStatus } from './AdGroupAdServiceTextAssetActiveStatus';
import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const AdGroupAdServiceHeadlineTextAsset = z.object({
  text: z.string().nullable(),
  pinnedField: AdGroupAdServiceHeadlinePinnedField,
  activeStatus: AdGroupAdServiceTextAssetActiveStatus,
  approvalStatus: AdGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceHeadlineTextAsset = z.infer<typeof AdGroupAdServiceHeadlineTextAsset>;
