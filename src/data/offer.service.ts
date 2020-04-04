import { OfferListSearchParams } from '../types/offerList';
import { http } from './http.service';
import { Offer } from '../types/api/offer';

class OfferService {
  baseUrl = '/offers';

  async getOffers(params: OfferListSearchParams): Promise<Offer[]> {
    const res = await http.get<Offer[]>(this.baseUrl);

    const offers = res.data;

    return offers;
  }
}

export const offerService = new OfferService();
