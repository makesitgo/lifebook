import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
    // TODO: test out <ErrorRoute /> and see if `errMsg` actually propogates or not
    // const { errMsg } = this.props;
    // if (errMsg) {
    //   this.state = { hasError: true, error: { message: errMsg } };
    // } else {
    //   this.state = { hasError: false, error: undefined };
    // }
  }

  componentDidCatch(error, info) {
    console.error(error, info)
    this.setState({ hasError: true, error: error });
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      const errMsg = error.message || JSON.stringify(error);
      return (
        <div className="Error">
          <h1>Oops...this error is no yolk!</h1>
          <p>Try refreshing the page.  If the problem persists, then we are already aware of this issue. Hang tight!</p>
          <hr />
          <pre>{errMsg}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
