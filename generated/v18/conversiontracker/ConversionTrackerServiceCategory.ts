import { z } from 'zod';

export const ConversionTrackerServiceCategory = z.enum(["DEFAULT", "PAGE_VIEW", "PURCHASE", "SIGNUP", "LEAD", "DOWNLOAD", "ADD_TO_CART", "BEGIN_CHECKOUT", "SUBSCRIBE_PAID", "PHONE_CALL_LEAD", "SUBMIT_LEAD_FORM", "BOOK_APPOINTMENT", "REQUEST_QUOTE", "GET_DIRECTIONS", "OUTBOUND_CLICK", "CONTACT", "ENGAGEMENT", "STORE_VISIT", "STORE_SALE", "QUALIFIED_LEAD", "CONVERTED_LEAD", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceCategory = z.infer<typeof ConversionTrackerServiceCategory>;
