import { z } from 'zod';

export const CampaignServiceConversionActionCategory = z.enum(["DEFAULT", "PAGE_VIEW", "PURCHASE", "SIGNUP", "DOWNLOAD", "ADD_TO_CART", "BEGIN_CHECKOUT", "SUBSCRIBE_PAID", "PHONE_CALL_LEAD", "SUBMIT_LEAD_FORM", "BOOK_APPOINTMENT", "REQUEST_QUOTE", "GET_DIRECTIONS", "OUTBOUND_CLICK", "CONTACT", "ENGAGEMENT", "STORE_VISIT", "STORE_SALE", "QUALIFIED_LEAD", "CONVERTED_LEAD", "UNKNOWN"]).nullable();

export type CampaignServiceConversionActionCategory = z.infer<typeof CampaignServiceConversionActionCategory>;
