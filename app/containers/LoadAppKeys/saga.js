import { takeLatest, call, put } from 'redux-saga/effects';
import { STOREFRONT_CONFIG_FETCH } from './constants';
import { storefrontConfigFetchSuccess, storefrontConfigFetchFail } from './actions';
import API from '../../services/api';

const api = API.create();

// eslint-disable-next-line no-unused-vars
export function* getStorefrontConfig(action) {
  const storefrontConfig = yield call(api.getStorefrontConfig);
  if (storefrontConfig.ok) {
    yield put(storefrontConfigFetchSuccess(storefrontConfig.data));
  } else {
    yield put(storefrontConfigFetchFail(storefrontConfig.data));
  }
}

export default function* defaultSaga() {
  yield takeLatest(STOREFRONT_CONFIG_FETCH, getStorefrontConfig);
}
