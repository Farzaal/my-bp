import * as CONSTANTS from './constants';

export function storefrontConfigFetch() {
  return {
    type: CONSTANTS.STOREFRONT_CONFIG_FETCH,
  };
}
export function storefrontConfigFetchSuccess(payload) {
  return {
    type: CONSTANTS.STOREFRONT_CONFIG_FETCH_SUCCESS,
    payload,
  };
}
export function storefrontConfigFetchFail(error) {
  return {
    type: CONSTANTS.STOREFRONT_CONFIG_FETCH_FAIL,
    error,
  };
}
