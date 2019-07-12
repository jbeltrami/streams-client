import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => (
  <div>
    <Link to="/pagetwo">Navigate to Page Two</Link>
    PageOne
  </div>
);

const PageTwo = () => (
  <div>
    PageTwo
    <Link to="/">Navigate to Page One</Link>
    <button type="button">click me</button>
  </div>
);

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
