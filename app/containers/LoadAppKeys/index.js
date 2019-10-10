/* eslint-disable arrow-body-style */
import React from 'react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import saga from './saga';
import reducer from './reducer';
import { storefrontConfigFetch } from './actions';
import { createStructuredSelector } from 'reselect';
import { StorefrontConfig, StorefrontConfigLoading } from './selectors';

class LoadAppKeys extends React.Component {

  componentDidMount() {
    this.props.getStorefrontConfigs();
  }

  render() {
    console.log(this.props);
    return (<div>Farzal</div>);
  }
}

const mapStateToProps = createStructuredSelector({
  sfConfig: StorefrontConfig(),
  loading: StorefrontConfigLoading(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getStorefrontConfigs: () => dispatch(storefrontConfigFetch())
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'storefrontConfig', reducer });
const withSaga = injectSaga({ key: 'storefrontConfig', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoadAppKeys);
