import { createStore } from 'redux';
import rootReducer from './index'
import { persistReducer, persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension'
//Importação que nós vamos amazenar o estado do usuário no navegador
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'siteeventos',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,composeWithDevTools());
const persistor = persistStore(store)

export { store, persistor }
