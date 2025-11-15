import { z } from 'zod';

export const LabelServiceCountLabeledEntity = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type LabelServiceCountLabeledEntity = z.infer<typeof LabelServiceCountLabeledEntity>;
