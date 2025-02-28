import type { Advert } from "@/pages/adverts/types";

// action Types
type AuthLogin = {
  type: "auth/login";
};

type AuthLogout = {
  type: "auth/logout";
};

type AdvertsLoaded = {
  type: "advert/loaded";
  payload: Advert[];
};

type AdvertCreated = {
  type: "advert/created";
  payload: Advert;
};

//Action creators
export const authLogin = (): AuthLogin => ({
  type: "auth/login",
});
export const authLogout = (): AuthLogout => ({
  type: "auth/logout",
});

export const advertsLoaded = (adverts: Advert[]): AdvertsLoaded => ({
  type: "advert/loaded",
  payload: adverts,
});

export const advertsCreated = (advert: Advert): AdvertCreated => ({
  type: "advert/created",
  payload: advert,
});

export type Actions = AuthLogin | AuthLogout | AdvertsLoaded | AdvertCreated;
