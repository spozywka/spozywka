import { OfferListSearchParams } from './types/offerList';

export const apiUrl = process.env.REACT_APP_API_URL;

export const paths = {
  homepage: '/',
  offerList: '/offers',
};

export const defaultOfferListParams: OfferListSearchParams = {
  who: 'consumer',
  city: 'Warsaw',
  category: 'Food',
};
