// Generated by https://quicktype.io

import { Product } from "./products";

export interface Orders {
  orderId: string;
  userId: string;
  date: string;
  itemsQty: number;
  totalPrice: number;
  status: string;
  items: Product[];
}
