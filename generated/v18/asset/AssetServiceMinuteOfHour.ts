import { z } from 'zod';

export const AssetServiceMinuteOfHour = z.enum(["ZERO", "FIFTEEN", "THIRTY", "FORTY_FIVE", "UNKNOWN"]).nullable();

export type AssetServiceMinuteOfHour = z.infer<typeof AssetServiceMinuteOfHour>;
