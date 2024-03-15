import { useOutlet } from "react-router-dom";

import Menu from "./modules/Menu";
import Customizer from "./modules/Customizer";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <>
      <Menu />
      <section className="flex-1">
        <header></header>
        <main className="h-full">{outlet}</main>
      </section>
      <Customizer />
    </>
  );
};

export default Layout;
