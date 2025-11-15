import { z } from 'zod';

import { adGroupAdServiceDescriptionPinnedField } from './AdGroupAdServiceDescriptionPinnedField';
import { adGroupAdServiceTextAssetActiveStatus } from './AdGroupAdServiceTextAssetActiveStatus';
import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const adGroupAdServiceDescriptionTextAsset = z.object({
  text: z.string().nullable(),
  pinnedField: adGroupAdServiceDescriptionPinnedField,
  activeStatus: adGroupAdServiceTextAssetActiveStatus,
  approvalStatus: adGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceDescriptionTextAsset = z.infer<typeof adGroupAdServiceDescriptionTextAsset>;
