import { Link } from "react-router-dom";

import LogoIcon from "@/assets/react.svg";

interface Props {
  isSpread: boolean;
}

const Logo: React.FC<Props> = ({ isSpread }) => {
  return (
    <Link to="/" className="flex items-center">
      <img src={LogoIcon} className="size-[30px]" />
      <span
        className={
          "ml-[10px] text-[20px] font-bold leading-[25px] tracking-[1px] transition-[opacity] duration-300 ease-in-out" +
          (isSpread ? " opacity-1" : " opacity-0")
        }
      >
        {import.meta.env.VITE_APP_SHORT_NAME}
      </span>
    </Link>
  );
};

export default Logo;
