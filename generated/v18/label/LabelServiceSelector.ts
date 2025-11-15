import { z } from 'zod';

import { labelServiceCountLabeledEntity } from './LabelServiceCountLabeledEntity';

export const labelServiceSelector = z.object({
  accountId: z.number().int(),
  countLabeledEntity: labelServiceCountLabeledEntity,
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type LabelServiceSelector = z.infer<typeof labelServiceSelector>;
