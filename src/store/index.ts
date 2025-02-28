import { createStore } from "redux";
import { reducer, type State } from "./reducers";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//fn para crear un store y devolverlo
export default function configureStore(preloadedState: Partial<State>) {
  const store = createStore(
    reducer,
    // @ts-expect-error: no idea
    preloadedState,
    // @ts-expect-error: import devtools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // @ts-expect-error: import devtools extension
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}

export type AppStore = ReturnType<typeof configureStore>;
export type AppGetState = AppStore["getState"];
export type RootState = ReturnType<AppGetState>
export type AppDispatch = AppStore["dispatch"]

// no entiendo el TS de esto
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();