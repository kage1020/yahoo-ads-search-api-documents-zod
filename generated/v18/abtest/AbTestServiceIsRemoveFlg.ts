import { z } from 'zod';

export const AbTestServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AbTestServiceIsRemoveFlg = z.infer<typeof AbTestServiceIsRemoveFlg>;
