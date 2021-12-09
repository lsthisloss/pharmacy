import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Main from "./pages/Main"
import Substance from "./pages/Substance"

import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, SUBSTANCE_ROUTE } from "./utils/consts"
export const authRoutes = [
    {
        path : ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SUBSTANCE_ROUTE + '/:id',
        Component: Substance
    },
]