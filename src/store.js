import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/index";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState = {};
const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware)
  
)
export const persistor = persistStore(store) 
