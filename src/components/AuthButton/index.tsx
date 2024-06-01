import { Fragment, memo } from "react";

import { useUserStore } from "@/stores";

type AuthButtonProps = {
  authority: AuthButtonItems;
  children: React.ReactNode;
};

const AuthButton: React.FC<AuthButtonProps> = ({ authority, children }) => {
  const userInfo = useUserStore(state => state.userInfo);
  const auth = authority ? userInfo?.buttonList.includes(authority) : authority;

  return <Fragment>{auth && children}</Fragment>;
};

export default memo(AuthButton);
