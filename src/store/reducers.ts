import type { Advert } from "@/pages/adverts/types";
import type { Actions } from "./actions";
import { combineReducers } from "redux";

export type State = {
  auth: boolean;
  adverts: Advert[];
};

const defaultState: State = {
  auth: false,
  adverts: [],
};

function auth(state = defaultState.auth, action: Actions): State["auth"] {
  switch (action.type) {
    case "auth/login":
      return true;
    case "auth/logout":
      return false;
    default:
      return state;
  }
}

function adverts(state = defaultState.adverts, action: Actions): State["adverts"] {
  switch (action.type) {
    case "advert/loaded":
      return action.payload ;
    case "advert/created":
      return [...state, action.payload] ;
    default:
      return state;
  }
}
 
// fn que une los reducers separados de auth y advert
export const reducer = combineReducers({ auth, adverts}) 
//export function reducer(state = defaultState, action: Actions): State {
//  return {
//    auth: auth(state.auth, action),
//    adverts: advert(state.adverts, action),
//  };
//}


