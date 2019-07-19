import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    const { fetchStream: getStream, match } = this.props;

    getStream(match.params.id);
  }

  onSubmit = formValues => {
    const { editStream: patchStream, match } = this.props;
    // console.log(formValues);

    patchStream(match.params.id, formValues);
  };

  render() {
    const { stream } = this.props;

    if (!stream)
      return (
        <div>
          StreamEdit
          <h2>Edit here</h2>
        </div>
      );

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

StreamEdit.propTypes = {
  match: PropTypes.object,
  fetchStream: PropTypes.func,
  editStream: PropTypes.func,
  stream: PropTypes.object,
};
