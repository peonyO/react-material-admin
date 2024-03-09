import { useState, useEffect } from "react";
import { RouterProvider as Router, RouteObject, createHashRouter, createBrowserRouter, Navigate } from "react-router-dom";
import { useUserStore } from "@/stores";
import { usePermissions } from "@/hooks";
import { convertToDynamicRouterFormat } from "./modules/ConvertRouter";
import { wrappedStaticRouter } from "./modules/StaticRouter";

const mode = import.meta.env.VITE_ROUTER_MODE;

/**
 * @description Route file entry
 */
const RouterProvider: React.FC = () => {
  const { initPermissions } = usePermissions();

  const userInfo = useUserStore(state => state.userInfo);

  const [routerList, setRouterList] = useState<RouteObject[]>(wrappedStaticRouter);

  useEffect(() => {
    // When refreshing the page, there is no menu data
    if (!userInfo) {
      initPermissions();
      return;
    }

    // Convert to the routing structure required by react-router
    const dynamicRouter = convertToDynamicRouterFormat(userInfo.menuList);
    let allRouter = [...wrappedStaticRouter, ...dynamicRouter];

    // To prevent 404 from refreshing the page, add the * route at the end
    allRouter.forEach(item => item.path === "*" && (item.element = <Navigate to="/404" replace />));

    // Set routerList
    setRouterList(allRouter);
  }, [userInfo]);

  const routerMode = {
    hash: () => createHashRouter(routerList as RouteObject[]),
    history: () => createBrowserRouter(routerList as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
