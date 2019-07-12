import React from 'react';
import { Router, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
