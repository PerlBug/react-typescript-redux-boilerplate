import { createStore, Store } from 'redux';
import reducer from './reducers';
import { IAppStore } from './types/appStore';

export const store: Store<IAppStore> = createStore(
  reducer /* preloadedState, */,
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
      traceLimit: 25,
    })
    : {}
);
