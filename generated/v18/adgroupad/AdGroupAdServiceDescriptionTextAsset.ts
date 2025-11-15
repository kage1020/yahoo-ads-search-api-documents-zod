import { z } from 'zod';

import { AdGroupAdServiceDescriptionPinnedField } from './AdGroupAdServiceDescriptionPinnedField';
import { AdGroupAdServiceTextAssetActiveStatus } from './AdGroupAdServiceTextAssetActiveStatus';
import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const AdGroupAdServiceDescriptionTextAsset = z.object({
  text: z.string().nullable(),
  pinnedField: AdGroupAdServiceDescriptionPinnedField,
  activeStatus: AdGroupAdServiceTextAssetActiveStatus,
  approvalStatus: AdGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceDescriptionTextAsset = z.infer<typeof AdGroupAdServiceDescriptionTextAsset>;
