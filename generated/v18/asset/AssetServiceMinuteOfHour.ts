import { z } from 'zod';

export const assetServiceMinuteOfHour = z.enum(["ZERO", "FIFTEEN", "THIRTY", "FORTY_FIVE", "UNKNOWN"]).nullable();

export type AssetServiceMinuteOfHour = z.infer<typeof assetServiceMinuteOfHour>;
