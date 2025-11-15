import { z } from 'zod';

export const adGroupServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceIsRemoveFlg = z.infer<typeof adGroupServiceIsRemoveFlg>;
