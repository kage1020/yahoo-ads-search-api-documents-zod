import { z } from 'zod';

export const abTestServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AbTestServiceIsRemoveFlg = z.infer<typeof abTestServiceIsRemoveFlg>;
