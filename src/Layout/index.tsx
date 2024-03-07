import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Link to="/login">跳转登录页</Link>
    </div>
  );
};

export default Layout;
