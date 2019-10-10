// a library to wrap and simplify api calls
import apisauce from 'apisauce';
// import uuidv1 from 'uuid';
// import store from 'store';
// import Cookies from 'js-cookie';

import { API_BASE_URL } from 'config/app';
// import { store } from '../../App';

// our 'constructor'
const create = (baseURL = API_BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the 'constructor'
    baseURL,
    // here are some default headers
    // headers: {},
    // 10 second timeout...
    // timeout: 10000
  });

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  // if (__DEV__ && console.tron) {
  //   api.addMonitor(console.tron.apisauce)
  // }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than 'get', 'post' and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getHeaders = () => {
    // const token = store.get('token');
    // if (token) {
    //   Cookies.set('token', token);
    //   return { Authorization: `Bearer ${token}` };
    // }
    let uuid = Cookies.get('cartId');
    if (uuid) {
      return { uuid };
    }
    uuid = Cookies.get('uuid');
    if (uuid) {
      return { uuid };
    }
    // if (!uuid) {
    uuid = uuidv1();
    Cookies.set('uuid', uuid);
    // }
    // Cookies.set('cartId', uuid);
    return { uuid };
    // const token = store.getState().auth.token;
    // return (token) ? { Authorization: `Bearer ${token}` } : {};
  };
  // api.defaults.headers.common['Authorization'] = 'AUTH_TOKEN' // need the token here

  //   const getUser = (username) => api.get('search/users', {q: username})

  //   const getUser = (username) => api.get('search/users', {q: username})
  const loginUser = (data) => api.post('login', data);
  const forgotUser = (data) => api.post('login', data);
  const signupUser = (data) => api.post('userSignup', data);
  const categoryCMS = (QueryString) => api.get(`/category/cms/${QueryString.id}`, QueryString);
  const addToCart = (data) => api.post('cart', data, { headers: getHeaders() });
  const getCartList = (QueryString) => api.get('cart', QueryString, { headers: getHeaders() });
  const cartItemRemoved = (data) => api.delete(`cart/${data.key}`, data, { headers: getHeaders() });
  const cartItemsUpdate = (data) => api.post('cart/updateItems', data, { headers: getHeaders() });
  const getProductList = (QueryString) => api.get('products', QueryString);
  const getProductDetail = (QueryString) => api.get(`products/${QueryString.id}`, QueryString);
  const getDealBannerList = (QueryString) => api.get('banner', QueryString);
  const getCategoryList = (QueryString) => api.get('category', QueryString);
  const getMenuList = (QueryString = {}) => api.get('category/menu', QueryString);
  const getMainMenuList = (QueryString = {}) => api.get('main-menu', QueryString);
  const addToMailchimp = (data = {}) => api.post('mailchimp', data);
  const getCategoryBreadCrumb = (QueryString) => api.get(`category/${QueryString}`, QueryString);
  const getItemByType = (QueryString) => api.get(`url_rewrite/${QueryString.id}`, QueryString);
  const getStorefrontConfig = () => api.get(`storefront/configs`);
  // const tcsApiUrl = (data) => api.post(`https://apis.tcscourier.com/uat/v1/yayvo/orders/status`, data, {headers: {'X-IBM-Client-Id' : 'eb97b39d-7fe6-4fca-94f3-ff017772a1bf'}});
  const tcsApiUrl = (data) => api.post(`verify-ticket`, data);


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    loginUser,
    forgotUser,
    signupUser,
    // a list of the API functions from step 2
    categoryCMS,
    addToCart,
    getCartList,
    cartItemRemoved,
    cartItemsUpdate,
    getProductList,
    getProductDetail,
    getDealBannerList,
    // Category
    getCategoryList,
    getMenuList,
    getMainMenuList,
    addToMailchimp,
    getCategoryBreadCrumb,
    getItemByType,
    tcsApiUrl,
    getStorefrontConfig
  };
};

// let's return back our create method as the default.
export default {
  create,
};
