import { OfferListSearchParams } from './types/offerList';

export const paths = {
  homepage: '/',
  offerList: '/offers',
};

export const defaultOfferListParams: OfferListSearchParams = {
  who: 'consumer',
  city: 'Warsaw',
  category: 'Food',
};
