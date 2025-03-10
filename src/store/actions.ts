import { isApiClientError } from "@/api/error";
import type { Advert } from "@/pages/adverts/types";
import { login } from "@/pages/auth/service";
import type { Credentials } from "@/pages/auth/types";
import type { AppThunk } from ".";
import { getAdverts } from "@/pages/adverts/service";
import { createAdvert } from "@/pages/adverts/service";
// action Types
// User Auth authentication
type AuthLoginPending = {
  type: "auth/login/pending";
};
type AuthLoginFulFilled = {
  type: "auth/login/fulfilled";
};
type AuthLoginRejected = {
  type: "auth/login/rejected";
  payload: Error;
};

//Action creators
// async auth login
export const authLoginPending = (): AuthLoginPending => ({
  type: "auth/login/pending",
});
export const authLoginFulfilled = (): AuthLoginFulFilled => ({
  type: "auth/login/fulfilled",
});
export const authLoginRejected = (error: Error): AuthLoginRejected => ({
  type: "auth/login/rejected",
  payload: error,
});

// middleware auth login
export function middlewareAuthLogin(
  credentials: Credentials,
  remember: boolean,
): AppThunk<Promise<void>> {
  return async function (dispatch: any) {
    dispatch(authLoginPending());
    try {
      await login(credentials, remember);
      dispatch(authLoginFulfilled());
    } catch (error) {
      if (isApiClientError(error)) dispatch(authLoginRejected(error));
    }
  };
}

// User logOut
type AuthLogout = {
  type: "auth/logout";
};
export const authLogout = (): AuthLogout => ({
  type: "auth/logout",
});

// Adverts actions
type AdvertsLoadedFulfilled = {
  type: "advert/loaded/fulfilled";
  payload: Advert[];
};
type AdvertLoadingPending = {
  type: "advert/loading/pending";
};
type AdvertLoadingRejected = {
  type: "advert/loading/rejected";
  payload: Error;
};

// async adverts creators
export const advertLoadingPending = (): AdvertLoadingPending => ({
  type: "advert/loading/pending",
});
export const advertsLoadedFulfilled = (
  adverts: Advert[],
): AdvertsLoadedFulfilled => ({
  type: "advert/loaded/fulfilled",
  payload: adverts,
});
export const advertLoadRejected = (error: Error): AdvertLoadingRejected => ({
  type: "advert/loading/rejected",
  payload: error,
});

// middleware adverts load
export function middlewareAdvertLoad(): AppThunk<Promise<void>> {
  return async function (dispatch, getState) {
    const state = getState();
    if (state.adverts) {
      return;
    }
    dispatch(advertLoadingPending());
    try {
      const adverts = await getAdverts();
      console.log(adverts);
      dispatch(advertsLoadedFulfilled(adverts));
    } catch (error) {
      if (isApiClientError(error)) dispatch(advertLoadRejected(error));
    }
  };
}

// Create advert
type AdvertCreatedPending = {
  type: "advert/created/pending";
};
type AdvertCreatedFulfilled = {
  type: "advert/created/fulfilled";
  payload: Advert;
};
type AdvertCreatedRejected = {
  type: "advert/created/rejected";
  payload: Error;
};

export const advertCreatedPending = (): AdvertCreatedPending => ({
  type: "advert/created/pending",
});
export const advertsCreatedFulFilled = (advert: Advert): AdvertCreatedFulfilled => ({
  type: "advert/created/fulfilled",
  payload: advert,
});
export const advertCreatedRejected = (error: Error): AdvertCreatedRejected => ({
  type: "advert/created/rejected",
  payload: error,
});

export function middlewareAdvertCreate(advertContent: Pick<Advert, "tags" | "name" | "sale" | "price"> & { photo?: File }): AppThunk<Promise<Advert>> {
  return async function (dispatch) {
    dispatch(advertCreatedPending());
    try {
      const createdAdvert = await createAdvert(advertContent);
      dispatch(advertsCreatedFulFilled(createdAdvert));
      // Recargamos la lista de anuncios para asegurarnos de que la UI esté actualizada
      const adverts = await getAdverts();
      dispatch(advertsLoadedFulfilled(adverts));
      return createdAdvert
    } catch (error) {
      if (isApiClientError(error)) {
        dispatch(advertCreatedRejected(error));
      }
      throw error
    }
  };
}

// ui
type UiResetError = {
  type: "ui/reset/error";
};

export const uiResetError = (): UiResetError => ({
  type: "ui/reset/error",
});

export type Actions =
  | AuthLoginPending
  | AuthLoginFulFilled
  | AuthLoginRejected
  | AuthLogout
  | AdvertsLoadedFulfilled
  | AdvertLoadingPending
  | AdvertLoadingRejected
  | UiResetError
  | AdvertCreatedPending
  | AdvertCreatedFulfilled
  | AdvertCreatedRejected;
