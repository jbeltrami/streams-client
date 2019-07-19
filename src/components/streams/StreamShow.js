import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    const { fetchStream: getStream, match } = this.props;

    getStream(match.params.id);
  }

  render() {
    const { stream } = this.props;
    if (!stream) return <div>Loading...</div>;

    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

StreamShow.propTypes = {
  fetchStream: PropTypes.func,
  match: PropTypes.object,
  stream: PropTypes.object,
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
