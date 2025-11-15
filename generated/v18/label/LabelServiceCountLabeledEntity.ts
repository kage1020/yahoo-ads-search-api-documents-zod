import { z } from 'zod';

export const labelServiceCountLabeledEntity = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type LabelServiceCountLabeledEntity = z.infer<typeof labelServiceCountLabeledEntity>;
