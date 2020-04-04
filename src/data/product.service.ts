import { Product } from '../types/api/product';
import { ProductsSearchParams } from '../types/offerList';
import { http } from './http.service';

class ProductService {
  baseUrl = '/products';

  async getProducts(params: ProductsSearchParams): Promise<Product[]> {
    const res = await http.get<Product[]>(this.baseUrl, { params: { offer_id: params.offerId } });

    const products = res.data;

    return products;
  }
}

export const productService = new ProductService();
