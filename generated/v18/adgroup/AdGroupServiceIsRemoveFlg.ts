import { z } from 'zod';

export const AdGroupServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceIsRemoveFlg = z.infer<typeof AdGroupServiceIsRemoveFlg>;
