import { useOutlet } from "react-router-dom";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default Layout;
