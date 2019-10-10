/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import { createSelector } from 'reselect';

const selectStorefrontConfig = (state) => state.get('storefrontConfig');

const StorefrontConfig = () => createSelector(
    selectStorefrontConfig,
    (selectStorefrontConfig) => selectStorefrontConfig.get('storefrontConfig')
);

const StorefrontConfigLoading = () => createSelector(
    selectStorefrontConfig,
    (selectStorefrontConfig) => selectStorefrontConfig.get('loading')
);

const AlgoliaPermissions = () => createSelector(
  selectStorefrontConfig,
  (selectStorefrontConfig) => selectStorefrontConfig.get('storefrontConfig').find((sf) => sf.type == 'algolia_keys')
);

const GeneralSettings = () => createSelector(
  selectStorefrontConfig,
  (selectStorefrontConfig) => selectStorefrontConfig.get('storefrontConfig').find((sf) => sf.type == 'general_settings')
);

const AutoCompleteConfig = () => createSelector(
  selectStorefrontConfig,
  (selectStorefrontConfig) => selectStorefrontConfig.get('storefrontConfig').find((sf) => sf.type == 'auto_complete')
);

const StorefrontConfigError = () => createSelector(
    selectStorefrontConfig,
    (selectStorefrontConfig) => selectStorefrontConfig.get('error')
);

export {
    StorefrontConfig,
    StorefrontConfigLoading,
    StorefrontConfigError,
    AutoCompleteConfig,
    AlgoliaPermissions,
    GeneralSettings,
};
