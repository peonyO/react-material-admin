import { RouteObject, redirect } from "react-router-dom";
import { lazy } from "react";

import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";

import { getStorage } from "@/utils";
import Layout from "@/Layout";
import PageLoading from "@/components/Loading/Page";

import { getFlatMenuList } from "../helpers/utils";
import LazyCmp from "./LazyCmp";

// 导入views目录中的所有视图文件
const modules = import.meta.glob("@/pages/**/*.tsx") as Record<string, Parameters<typeof lazy<React.FC>>[number]>;

/**
 * @description 将menuList转换为react-router所需的格式
 * @param {Array} authMenuList 权限菜单列表
 * @returns {Array} react-router所要求的路由格式
 */
export const convertToDynamicRouterFormat = (authMenuList: UserInfo["menuList"]) => {
  // 扁平路由
  const flatMenuList = getFlatMenuList(authMenuList);

  const dynamicRouter: RouteObject[] = [{ element: <Layout />, children: [] }];

  // 转换路由
  flatMenuList.forEach(item => {
    const routeObject: RouteObject = {};

    // 懒加载路由
    if (item.dirPath && typeof item.dirPath === "string") {
      const lazyImport = lazy(modules["/src/pages/" + item.dirPath + "/index.tsx"]);
      routeObject.element = <LazyCmp loading={<PageLoading />} Lazy={lazyImport} />;
    }

    // 设置 loader
    routeObject.loader = () => {
      const tokenInfo = getStorage("tokenInfo");
      if (tokenInfo) {
        /** 当 token 还有 5 分钟过期时，重新登录 */
        if (dayjs().valueOf() + 5 * 60 * 1000 > tokenInfo.expireTime) {
          enqueueSnackbar({ variant: "error", message: "登录信息已过期，请重新登录" });
          throw redirect("/login");
        } else {
          return { title: item.title };
        }
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
