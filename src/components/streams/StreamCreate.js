import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    const { createStream: create } = this.props;

    create(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

StreamCreate.propTypes = {
  createStream: PropTypes.func,
};

export default connect(
  null,
  { createStream }
)(StreamCreate);
