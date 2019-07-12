import React, { Component } from 'react';

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '435781761855-d48le27eabjo0i70vpge23dt1vsl9usp.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
