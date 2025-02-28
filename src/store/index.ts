import { createStore } from "redux"
import { reducer } from "./reducers"

//fn para crear un store y devolverlo
export default function configureStore(){
    const store = createStore(reducer)
    return store
}

// export type AppStore = typeof store;
// export type AppGetState = AppStore["getState"];
// export type RootState = ReturnType<AppGetState>
// export type AppDispatcj = AppStore["dispatch"]
