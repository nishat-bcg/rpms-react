import { configureStore, combineReducers } from '@reduxjs/toolkit';

import drawerSlice from 'src/stores/drawer.slice';
import modalSlice from 'src/stores/modal.slice';
import calendarSlice from './calendar.slice';
import campaignSlice from './campaign.slice';
import detailedTableSlice from './detailedTable.slice';
import refCalendarSlice from './referenceCal.slice';
import productSlice from './product.slice';

const rootReducer = combineReducers({
  drawer: drawerSlice.reducer,
  modal: modalSlice.reducer,
  calendar: calendarSlice.reducer,
  campaign: campaignSlice.reducer,
  detailedTable: detailedTableSlice.reducer,
  refCalendar: refCalendarSlice.reducer,
  product: productSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
