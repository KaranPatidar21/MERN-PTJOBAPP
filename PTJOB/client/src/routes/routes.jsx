import { loginPageUrl } from "../constant";
import Home from "../pages/home";
import Login from "../pages/Login";


export const appRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: loginPageUrl,
    component: Login,
  },
];