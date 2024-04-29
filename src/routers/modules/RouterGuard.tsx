import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getStorage } from "@/utils";

/**
 * @description 路由守卫
 */
interface RouterGuardProps {
  children: React.ReactNode;
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // 挂载导航以提供非React函数组件或自定义React Hook函数中的调用
  window.$navigate = navigate;

  useEffect(() => {
    const meta = loader as DefaultLoaderData;
    const tokenInfo = getStorage("tokenInfo");

    if (meta) {
      const title = import.meta.env.VITE_APP_NAME;
      document.title = meta.title ? `${meta.title} - ${title}` : title;
    }

    // 是否登录页面
    const isLoginPage = pathname === "/login";

    if (tokenInfo && isLoginPage) {
      return navigate("/", { replace: true });
    }

    // 如果没有令牌，重定向到登录页面
    if (!tokenInfo && !isLoginPage) {
      return navigate("/login", { replace: true });
    }
  }, [loader]);

  return props.children;
};

export default RouterGuard;
