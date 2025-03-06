import type { Advert } from "@/pages/adverts/types";

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
// User logOut
type AuthLogout = {
  type: "auth/logout";
};
// Adverts
type AdvertsLoaded = {
  type: "advert/loaded";
  payload: Advert[];
};

type AdvertCreated = {
  type: "advert/created";
  payload: Advert;
};
// ui
type UiResetError = {
  type: "ui/reset/error";
}

//Action creators
// auth login
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
export const authLogout = (): AuthLogout => ({
  type: "auth/logout",
});
// adverts
export const advertsLoaded = (adverts: Advert[]): AdvertsLoaded => ({
  type: "advert/loaded",
  payload: adverts,
});

export const advertsCreated = (advert: Advert): AdvertCreated => ({
  type: "advert/created",
  payload: advert,
});

export const uiResetError = (): UiResetError => ({
  type: "ui/reset/error",
});

export type Actions =
  | AuthLoginPending
  | AuthLoginFulFilled
  | AuthLoginRejected
  | AuthLogout
  | AdvertsLoaded
  | AdvertCreated
  | UiResetError
