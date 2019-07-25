import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Switch, Route, Redirect } from 'react-router';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect to="/404" />
      </Switch>
    </Provider>
  );
};

export default App;
