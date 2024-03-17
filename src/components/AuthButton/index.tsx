import * as React from "react";

import { useAuthStore } from "@/stores";

type AuthButtonProps = {
  authority: string;
  children: React.ReactNode;
};

const AuthButton: React.FC<AuthButtonProps> = ({ authority, children }) => {
  const authButtonList = useAuthStore(state => state.authButtonList);
  const auth = authority ? authButtonList?.includes(authority) : authority;

  return <React.Fragment>{auth && children}</React.Fragment>;
};

export default React.memo(AuthButton);
