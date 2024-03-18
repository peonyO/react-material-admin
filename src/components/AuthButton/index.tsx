import { Fragment, memo } from "react";

import { useAuthStore } from "@/stores";

type AuthButtonProps = {
  authority: string;
  children: React.ReactNode;
};

const AuthButton: React.FC<AuthButtonProps> = ({ authority, children }) => {
  const authButtonList = useAuthStore(state => state.authButtonList);
  const auth = authority ? authButtonList?.includes(authority) : authority;

  return <Fragment>{auth && children}</Fragment>;
};

export default memo(AuthButton);
