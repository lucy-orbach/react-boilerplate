import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundry extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <h1>KaBOOM!</h1> : children;
  }
}

DefaultErrorBoundry.propTypes = {
  children: PropTypes.object
};