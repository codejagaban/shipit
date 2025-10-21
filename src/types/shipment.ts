export type ShipmentStatus = 'pending' | 'processing' | 'shipped' | 'in_transit' | 'delivered' | 'cancelled';
export type ShipmentOrigin = 'US' | 'UK' | 'CN';

export interface Shipment {
  id: string;
  orderId: string;
  userId: string;
  origin: ShipmentOrigin;
  destination: 'NG';
  status: ShipmentStatus;
  trackingNumber: string;
  estimatedDelivery: Date;
  createdAt: Date;
  updatedAt: Date;
}