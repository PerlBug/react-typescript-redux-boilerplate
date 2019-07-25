import React from 'react';

export interface AppContextType {
  loader: {
    isLoading: boolean;
    message: string;
  };
  setLoader: (value?: { isLoading: boolean; message?: string }) => any;
}
const AppContext = React.createContext<AppContextType>({
  loader: {
    isLoading: false,
    message: '',
  },
  setLoader: () => null,
});

export default AppContext;
