import { OfferListSearchParams } from '../types/offerList';
import { http } from './http.service';
import { Offer } from '../types/api/offer';

class OfferService {
  baseUrl = '/offers';

  async getOffers(params: OfferListSearchParams): Promise<Offer[]> {
    const res = await http.get<Offer[]>(this.baseUrl, { params });

    const offers = res.data;

    return offers;
  }

  async getById(id: number): Promise<Offer> {
    const res = await http.get<Offer>(`${this.baseUrl}/${id}`);

    const offer = res.data;

    return offer;
  }
}

export const offerService = new OfferService();
