import type { RootState } from ".";

// abstraccion de la logica de selectores para acceso al estado
export const getIsLogged = (state: RootState) => state.auth;

export const getAdvertLoad = (state: RootState) => state.adverts;

export const getSingleAdvert = (advertID?: string) => (state: RootState) =>
  state.adverts.find((advert) => advert.id === advertID);

export const getUi = (state: RootState) => state.ui;
