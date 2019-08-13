import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Something went wrong....</div>
      );
    }
    return (
      <div><p>this.props.children</p></div>
    );
  }
}

export default Error;
