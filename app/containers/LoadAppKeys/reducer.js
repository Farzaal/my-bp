import { fromJS } from 'immutable';
import * as CONSTANTS from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  storefrontConfig: {},
});

function storefrontConfigReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.STOREFRONT_CONFIG_FETCH:
      return state.set('loading', true);
    case CONSTANTS.STOREFRONT_CONFIG_FETCH_SUCCESS:
      return state.set('loading', false)
                         .set('storefrontConfig', action.payload);
    case CONSTANTS.STOREFRONT_CONFIG_FETCH_FAIL:
      return state.set('loading', false)
                        .set('error', action.payload);
    default:
      return state;
  }
}

export default storefrontConfigReducer;
