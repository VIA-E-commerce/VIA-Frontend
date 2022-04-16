import loadable from '@loadable/component';

export const Home = loadable(() => import('./Home'));
export const Join = loadable(() => import('./Join'));
export const Login = loadable(() => import('./Login'));
export const Category = loadable(() => import('./Category'));
export const ProductDetail = loadable(() => import('./ProductDetail'));
export const Cart = loadable(() => import('./Cart'));
export const Order = loadable(() => import('./Order'));
export const Wishlist = loadable(() => import('./Wishlist'));

export const MyInfo = loadable(() => import('./MyPage/MyInfo'));
export const MyOrders = loadable(() => import('./MyPage/MyOrders'));
export const MyReviews = loadable(() => import('./MyPage/MyReviews'));
export const MyQuestions = loadable(() => import('./MyPage/MyQuestions'));
export const MyPage = loadable(() => import('./MyPage'));

export const Payment = loadable(() => import('./Payment'));

export const NotFound = loadable(() => import('./NotFound'));
