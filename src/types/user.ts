export type UserRole = 'shopper' | 'retailer' | 'admin';
export type UserLocation = 'NG' | 'US' | 'UK' | 'CN';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  location: UserLocation;
  createdAt: Date;
  updatedAt: Date;
}