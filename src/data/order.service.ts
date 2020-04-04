import { loggedInUserId } from '../constants';
import { Order } from '../types/api/order';
import { http } from './http.service';

class OrderService {
  baseUrl = '/orders';

  async createOrder(offerId: number, quantity: Record<number, number>): Promise<Order> {
    const body: Order = {
      offer_id: `${offerId}`,
      user_id: `${loggedInUserId}`,
      products: Object.entries(quantity).map(([productId, qty]) => ({
        product_id: productId,
        qty,
      })),
    };

    const res = await http.post<Order>(`${this.baseUrl}/`, body);

    return res.data;
  }
}

export const orderService = new OrderService();
