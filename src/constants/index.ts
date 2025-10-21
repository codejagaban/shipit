export const LOCATIONS = {
  NG: "Nigeria",
  US: "United States",
  UK: "United Kingdom",
  CN: "China",
} as const;

export const USER_ROLES = {
  SHOPPER: "shopper",
  RETAILER: "retailer",
  ADMIN: "admin",
} as const;

export const SHIPMENT_STATUSES = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  IN_TRANSIT: "in_transit",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const;
