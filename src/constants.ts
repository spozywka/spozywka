import { OfferListSearchParams } from './types/offerList';

export const apiUrl = process.env.REACT_APP_API_URL;

export const paths = {
  homepage: '/',
  offerList: '/offers',
  offerDetails: '/offers/:id',
  checkout: '/offers/:id/checkout',
  profile: '/profile',
};

export const defaultOfferListParams: OfferListSearchParams = {
  who: 'consumer',
  city: 'Warsaw',
  category: 'Food',
};

export const loggedInUserId = 13;
