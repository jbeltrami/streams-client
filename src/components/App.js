import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// Stream Components
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
// Other Components
import Header from './Header';
import history from '../history';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route
            path="/streams/delete/:id"
            exact
            component={StreamDelete}
          ></Route>
          <Route path="/streams/:id" exact component={StreamShow}></Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
