import { useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { getStorage } from "@/utils";

/**
 * @description Route guard component
 */
interface RouterGuardProps {
  children: React.ReactNode;
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  // Mount navigate to provide non-React function components or calls in custom React Hook functions
  window.$navigate = navigate;

  useEffect(() => {
    const meta = loader as DefaultLoaderData;
    const tokenInfo = getStorage("tokenInfo");

    if (meta) {
      const title = import.meta.env.VITE_APP_NAME;
      document.title = meta.title ? `${meta.title} - ${title}` : title;
    }

    // whether login page
    const isLoginPage = pathname === "/login";

    // If there is not menu data, no token && the accessed page is not login, redirect to the login page
    if (!tokenInfo && !isLoginPage) {
      return navigate("/login", { replace: true });
    }
  }, [loader]);

  return props.children;
};

export default RouterGuard;
