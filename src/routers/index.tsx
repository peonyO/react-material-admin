import { useState, useEffect } from "react";

import { RouterProvider as Router, type RouteObject, createHashRouter, createBrowserRouter, Navigate } from "react-router-dom";

import { useUserStore } from "@/stores";
import { usePermissions } from "@/hooks";

import { wrappedStaticRouter } from "./modules/StaticRouter";
import { convertToDynamicRouterFormat } from "./modules/ConvertRouter";

const mode = import.meta.env.VITE_ROUTER_MODE;

/**
 * @description 路由入口文件
 */
const RouterProvider: React.FC = () => {
  const { initPermissions } = usePermissions();

  const userInfo = useUserStore(state => state.userInfo);

  const [routerList, setRouterList] = useState<RouteObject[]>(wrappedStaticRouter);

  useEffect(() => {
    // 刷新页面时，没有菜单数据
    if (!userInfo) {
      initPermissions();
      return;
    }

    // 转换为react-router所需的路由结构
    const dynamicRouter = convertToDynamicRouterFormat(userInfo.menuList);
    let allRouter = [...wrappedStaticRouter, ...dynamicRouter];

    // 为了防止404刷新页面，请在页面末尾添加*路由
    allRouter.forEach(item => item.path === "*" && (item.element = <Navigate to="/404" replace />));

    // 设置 RouterList
    setRouterList(allRouter);
  }, [userInfo]);

  const routerMode = {
    hash: () => createHashRouter(routerList as RouteObject[]),
    history: () => createBrowserRouter(routerList as RouteObject[])
  };

  return <Router router={routerMode[mode]()} />;
};

export default RouterProvider;
