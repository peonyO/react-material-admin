import { RouteObjectType } from "../interface";
import Login from "@/pages/Login";
import NotFound from "@/components/Error/404";
import Layout from "@/Layout";

/**
 * staticRouter
 */
export const staticRouter: RouteObjectType[] = [
  {
    path: "/",
    element: <Layout />,
    redirect: "/",
    meta: {
      title: "首页"
    }
  },
  {
    path: "/Login",
    element: <Login />,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/404",
    element: <NotFound />,
    meta: {
      title: "404页面"
    }
  }
];
