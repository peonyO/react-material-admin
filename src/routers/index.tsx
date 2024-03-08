import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { RouteObjectType } from "./interface";
import { staticRouter } from "./modules/StaticRouter";
import { getStorage, logError } from "@/utils";
import { useUserStore } from "@/stores";

const errorPathMap = ["/404", "/403", "/500"];

const RouterProvider: React.FC = () => {
  const location = useLocation();
  const { pathname, search, state } = location;
  const userInfo = useUserStore(state => state.userInfo);
  const setUserInfo = useUserStore(state => state.setUserInfo);

  /** 获取用户信息 */
  const getUserInfo = async () => {
    try {
      setUserInfo({ name: "admin", avatar: "" });
    } catch (error) {
      logError("@Router：获取用户信息", error);
    }
  };

  // 路由校验是否有权限
  const routeAuth = (route: RouteObjectType): RouteObjectType["element"] => {
    /** 判断是否是错误页面 */
    if (pathname === route.path) {
      console.log(location.pathname, route.path);
      if (errorPathMap.includes(pathname)) {
        return route.element;
      }
      // 设置页面 title
      document.title = route.meta?.title
        ? `${route.meta?.title} - ${import.meta.env.VITE_PROJECT_NAME}`
        : import.meta.env.VITE_PROJECT_NAME;

      const tokenInfo = getStorage("tokenInfo");
      if (!tokenInfo && pathname !== "/login") {
        // 未登录
        return <Navigate to="/login" state={{ loginToPath: pathname + search }} replace />;
      }
      if (tokenInfo && !userInfo) {
        getUserInfo();
      }
      if (tokenInfo && pathname === "/login" && !state) {
        return <Navigate to={"/"} replace />;
      }
      if (route.redirect && pathname === route.path) {
        // 判断当前路由是否有重定向地址，有的话进入重定向页面
        return <Navigate to={route.redirect} replace />;
      }
      return route.element;
    } else {
      return <Navigate to={"/404"} replace />;
    }
  };
  console.log(routeAuth);

  // 循环获取路由
  const routerConfig = (routeList: RouteObjectType[]): React.ReactNode[] => {
    return routeList.map((route, index) => {
      return (
        <Route key={index} path={route.path ? route.path : "/"} element={route.element}>
          {/* 递归获取路由 */}
          {route.children ? routerConfig(route.children) : <></>}
        </Route>
      );
    });
  };

  return <Routes>{routerConfig(staticRouter)}</Routes>;
};

export default RouterProvider;
