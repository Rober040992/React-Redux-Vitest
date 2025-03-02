import { applyMiddleware, createStore } from "redux";
import { reducer, type State } from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
//import * as thunk from'redux-thunk';
//import type { Actions } from "./actions";



//fn para crear un store y devolverlo
export default function configureStore(preloadedState: Partial<State>) {
  const store = createStore(
    reducer,
    preloadedState as never,
    // devtools extension 
    composeWithDevTools(
      // habilitar el middleware de redux-thunk para poder usar async actions
      applyMiddleware(/*thunk.withExtraArgument<State, Actions>()*/)
    )
  );
  return store;
}

export type AppStore = ReturnType<typeof configureStore>;
export type AppGetState = AppStore["getState"];
export type RootState = ReturnType<AppGetState>
export type AppDispatch = AppStore["dispatch"]

// hooks para usar el store tipado una vez para el resto de la app
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();