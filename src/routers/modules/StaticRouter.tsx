import { lazy } from "react";

import { Navigate, redirect } from "react-router-dom";

import { getStorage } from "@/utils";
import AppLoading from "@/components/Loading/App";

import LazyCmp from "./LazyCmp";

import type { RouteObject } from "react-router-dom";

/**
 * staticRouter
 */
export const wrappedStaticRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/dashboards" />
  },
  {
    path: "/login",
    element: <LazyCmp loading={<AppLoading />} Lazy={lazy(() => import("@/pages/Login"))} />,
    loader: ({ params }) => {
      /** 如果有用户信息跳转首页 */
      const tokenInfo = getStorage("tokenInfo");
      if (tokenInfo) {
        throw redirect(params.redirect || "/");
      } else {
        return {
          title: "登录"
        };
      }
    }
  },
  {
    path: "/403",
    element: <LazyCmp loading={<AppLoading />} Lazy={lazy(() => import("@/components/Error/403"))} />,
    loader: () => {
      return {
        title: "403"
      };
    }
  },
  {
    path: "/500",
    element: <LazyCmp loading={<AppLoading />} Lazy={lazy(() => import("@/components/Error/500"))} />,
    loader: () => {
      return {
        title: "500"
      };
    }
  },
  {
    path: "/404",
    element: <LazyCmp loading={<AppLoading />} Lazy={lazy(() => import("@/components/Error/404"))} />,
    loader: () => {
      return {
        title: "404"
      };
    }
  },
  {
    path: "*",
    element: <LazyCmp loading={<AppLoading />} />
  }
];
