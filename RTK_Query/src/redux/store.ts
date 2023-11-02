import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './api';
import { myreducer } from './reducer';
// Store where we we set the reducers 
export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    myreducer: myreducer.reducer,
  },
  // In-Built MiddleWare in redux toolkit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
