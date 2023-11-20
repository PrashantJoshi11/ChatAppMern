
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import SideBarReducer from './Slice'



const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
  const reducerData= combineReducers({
    side:SideBarReducer

  });

  const persist = persistReducer(persistConfig,reducerData);



const store = configureStore({
    reducer: persist,
})
export default store;
