import { lazy } from "react";
import { RouteObject, redirect } from "react-router-dom";
import Layout from "@/Layout";
import PageLoading from "@/components/Loading/Page";
import { getStorage } from "@/utils";
import { getFlatMenuList } from "../helpers/utils";
import LazyCmp from "./LazyCmp";

// Import all view files in the views directory
const modules = import.meta.glob("@/pages/**/*.tsx") as Record<string, Parameters<typeof lazy<React.FC>>[number]>;

/**
 * @description Convert menuList to the format required by react-router
 * @param {Array} authMenuList Permissions menu list
 * @returns {Array} The routing format required by the react-router
 */
export const convertToDynamicRouterFormat = (authMenuList: UserInfo["menuList"]) => {
  // Flat Routing
  const flatMenuList = getFlatMenuList(authMenuList);

  const dynamicRouter: RouteObject[] = [{ element: <Layout />, children: [] }];

  // Convert Routing
  flatMenuList.forEach(item => {
    const routeObject: RouteObject = {};

    // Convert element to antd component
    if (item.dirPath && typeof item.dirPath === "string") {
      const lazyImport = lazy(modules["/src/pages/" + item.dirPath + "/index.tsx"]);
      routeObject.element = <LazyCmp loading={<PageLoading />} Lazy={lazyImport} />;
    }

    // Set loader
    routeObject.loader = () => {
      const tokenInfo = getStorage("tokenInfo");
      if (tokenInfo) {
        return { title: item.title };
      } else {
        throw redirect("/login");
      }
    };

    const route = {
      ...routeObject,
      path: item.pagePath
    };

    if (item.isFull) dynamicRouter.push(route);
    else dynamicRouter[0].children?.push(route);
  });

  return dynamicRouter;
};
