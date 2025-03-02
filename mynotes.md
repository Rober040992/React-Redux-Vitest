flujo de auth con redux

1️⃣ Inicio
En main.tsx, se inicializa Redux con auth: !!accessToken.
Se pasa el store al Provider.

2️⃣ Protección de rutas
En require-auth.tsx, se consulta getIsLogged para permitir o denegar acceso.

3️⃣ Inicio de sesión
En login-page.tsx, al autenticarse, se despacha authLogin() a Redux.

4️⃣ Cambio en la UI
En auth-button.tsx, useAppSelector(getIsLogged) muestra login/logout dinámicamente.

5️⃣ Cierre de sesión
En auth-button.tsx, al hacer logout, se despacha authLogout(), actualizando Redux.

6️⃣ Efecto en las rutas
En app.tsx, RequireAuth verifica el estado de Redux para proteger /adverts.
