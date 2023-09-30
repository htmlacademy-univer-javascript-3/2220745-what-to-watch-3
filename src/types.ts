import { store } from './redux/store.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
