import { z } from 'zod';

export const retargetingListServiceCustomKey = z.object({
  textKey: z.array(z.string().nullable()).nullable()
}).nullable();

export type RetargetingListServiceCustomKey = z.infer<typeof retargetingListServiceCustomKey>;
