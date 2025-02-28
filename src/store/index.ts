import { createStore } from "redux"
import { reducer } from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension';


//fn para crear un store y devolverlo
export default function configureStore(){
    const store = createStore(reducer, composeWithDevTools())
    return store
}

// export type AppStore = typeof store;
// export type AppGetState = AppStore["getState"];
// export type RootState = ReturnType<AppGetState>
// export type AppDispatcj = AppStore["dispatch"]
