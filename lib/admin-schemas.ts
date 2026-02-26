import { z } from "zod";

export const roleSchema = z.enum(["super_admin", "staff", "vendor", "seeker"]);
export type Role = z.infer<typeof roleSchema>;

export const userProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  full_name: z.string().nullable().optional(),
  role: roleSchema,
  is_approved: z.boolean(),
  created_at: z.string(),
});
export type UserProfile = z.infer<typeof userProfileSchema>;

export const subscriptionPlanSchema = z.object({
  id: z.string().uuid(),
  code: z.enum(["free", "silver", "gold"]),
  name: z.string(),
  price_monthly: z.number(),
  currency: z.string(),
  is_active: z.boolean(),
  features: z.array(z.string()).default([]),
});
export type SubscriptionPlan = z.infer<typeof subscriptionPlanSchema>;

export const paymentProviderCodeSchema = z.enum([
  "stripe",
  "paypal",
  "easypaisa",
  "jazzcash",
  "btc",
  "usdt",
]);
export type PaymentProviderCode = z.infer<typeof paymentProviderCodeSchema>;

export const paymentProviderSchema = z.object({
  id: z.string().uuid(),
  code: paymentProviderCodeSchema,
  display_name: z.string(),
  is_enabled: z.boolean(),
  config: z.record(z.string(), z.any()).default({}),
});
export type PaymentProvider = z.infer<typeof paymentProviderSchema>;

export const bannerAdSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  image_url: z.string().url(),
  target_url: z.string().url(),
  position: z.string(),
  is_active: z.boolean(),
  impressions: z.number(),
  clicks: z.number(),
});
export type BannerAd = z.infer<typeof bannerAdSchema>;

export const activityLogSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string(),
  actor_user_profile_id: z.string().uuid().nullable(),
  action: z.string(),
});
export type ActivityLog = z.infer<typeof activityLogSchema>;
