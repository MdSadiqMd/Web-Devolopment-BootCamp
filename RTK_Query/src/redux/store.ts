import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './api';
import { myreducer } from './reducer';

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    myreducer: myreducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
