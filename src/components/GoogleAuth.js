import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '435781761855-d48le27eabjo0i70vpge23dt1vsl9usp.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    const { signIn: login, signOut: logout } = this.props;

    if (isSignedIn) {
      login(this.auth.currentUser.get().getId());
    } else {
      logout();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClicked = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) return null;
    if (isSignedIn)
      return (
        <button
          className="ui red google button"
          type="button"
          onClick={this.onSignOutClicked}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    if (!isSignedIn)
      return (
        <button
          className="ui red google button"
          type="button"
          onClick={this.onSignInClick}
        >
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
  }

  render() {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>;
  }
}

GoogleAuth.propTypes = {
  signIn: PropTypes.func,
  signOut: PropTypes.func,
  isSignedIn: PropTypes.bool,
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
