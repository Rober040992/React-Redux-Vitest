import type { RootState } from ".";

// abstraccion de la logica de selectores para acceso al estado
export const getIsLogged = (state: RootState) => state.auth;