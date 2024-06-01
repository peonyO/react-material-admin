import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

import AppLoading from "@/components/Loading/App";

import LazyCmp from "./LazyCmp";

/**
 * staticRouter
 */
export const wrappedStaticRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/dashboards" replace />
  },
  {
    path: "/login",
    element: <LazyCmp loading={<AppLoading />} Lazy={lazy(() => import("@/pages/Login"))} />,
    loader: () => {
      return {
        title: "登录"
      };
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
