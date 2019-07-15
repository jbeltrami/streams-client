import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
    this.onAuthChange();
  };

  onSignOut = () => {
    this.auth.signOut();
    this.onAuthChange();
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;

    if (isSignedIn === null) return null;
    if (isSignedIn)
      return (
        <button
          className="ui red google button"
          type="button"
          onClick={this.onSignOut}
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
          onClick={this.onSignIn}
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
