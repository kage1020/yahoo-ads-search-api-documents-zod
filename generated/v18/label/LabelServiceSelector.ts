import { z } from 'zod';

import { LabelServiceCountLabeledEntity } from './LabelServiceCountLabeledEntity';

export const LabelServiceSelector = z.object({
  accountId: z.number().int(),
  countLabeledEntity: LabelServiceCountLabeledEntity,
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type LabelServiceSelector = z.infer<typeof LabelServiceSelector>;
