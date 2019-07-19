import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    const { fetchStream: getStream, match } = this.props;
    getStream(match.params.id);
  }

  onDelete = formValues => {
    const { deleteStream: destroyStream, match } = this.props;
    destroyStream(match.params.id, formValues);
  };

  renderActions = stream => (
    <React.Fragment>
      <button
        type="button"
        className="ui button negative"
        onClick={() => this.onDelete(stream.id)}
      >
        Delete
      </button>
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </React.Fragment>
  );

  renderContent(stream) {
    if (!stream) return 'Are you sure you want to delete this stream?';
    return `Are you sure you want to delete the stream with title: ${stream.title}?`;
  }

  render() {
    const { stream } = this.props;

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent(stream)}
        actions={this.renderActions(stream)}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

StreamDelete.propTypes = {
  fetchStream: PropTypes.func,
  deleteStream: PropTypes.func,
  match: PropTypes.object,
  stream: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
