import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    const { fetchStreams: getList } = this.props;

    getList();
  }

  renderAdmin(stream) {
    const { currentUserId } = this.props;

    if (stream.userId === currentUserId)
      return (
        <div className="right floated content">
          <button className="ui button primary" type="button">
            Edit
          </button>
          <button className="ui button negative" type="button">
            Delete
          </button>
        </div>
      );
  }

  renderList() {
    const { streams } = this.props;
    return streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  renderCreate() {
    const { isSignedIn } = this.props;

    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

StreamList.propTypes = {
  fetchStreams: PropTypes.func,
  streams: PropTypes.array,
  currentUserId: PropTypes.string,
  isSignedIn: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
