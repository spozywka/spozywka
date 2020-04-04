export interface OfferListSearchParams {
  who: 'consumer' | 'vendor';
  city: string;
  category: string;
}

export interface ProductsSearchParams {
  offerId: number;
}
