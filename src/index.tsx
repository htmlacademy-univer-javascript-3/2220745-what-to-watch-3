import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { films } from './mocks/films.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { fetchFilmsAction, fetchPromoFilmAction } from './redux/api-actions.ts';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} />
    </Provider>
  </React.StrictMode>
);
