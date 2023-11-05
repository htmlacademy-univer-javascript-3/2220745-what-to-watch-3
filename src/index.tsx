import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import {
  checkAuthorization,
  fetchFilmsAction,
  fetchPromoFilmAction,
} from './redux/api-actions.ts';
import ErrorMessage from './components/error-message/error-message.tsx';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthorization());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
