import React, { useEffect, useState, FunctionComponent } from 'react';
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
  RouteProps,
} from 'react-router';
import { IAppStore } from '../../types/appStore';
import { connect, ConnectedComponentClass } from 'react-redux';
import jwt_decode from 'jwt-decode';

interface PrivateRouteProps extends RouteProps {
  component:
  | React.ComponentClass<any>
  | ConnectedComponentClass<any, any>
  | FunctionComponent<any>;
  token: string;
}
const PrivateRoute: React.FC<PrivateRouteProps & RouteComponentProps> = ({
  component: Component,
  location,
  token,
  ...otherprops
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<
    boolean | 'intermediate'
  >('intermediate');

  useEffect(() => {
    if (token) {
      const decoded: { exp: number } = jwt_decode(token);
      const now = Date.now().valueOf() / 1000;
      if (!(typeof decoded.exp !== 'undefined' && decoded.exp < now)) {
        // not expired
        return setIsAuthenticated(true);
      }
    }
    // expired or no token
    localStorage.setItem('pathRequested', location.pathname);
    setIsAuthenticated(false);
  }, [token]);
  // const isAuthenticated ?
  return (
    <Route
      {...otherprops}
      render={props => {
        switch (isAuthenticated) {
          case true:
            return <Component {...props} />;
          case false:
            return <Redirect to="/login" />;
          default:
            return (
              <div></div>
            );
        }
      }}
    />
  );
};
const mapStateToProps = (store: IAppStore) => {
  return {
    token: store.auth.token,
  };
};
export default connect(mapStateToProps)(withRouter(PrivateRoute));
