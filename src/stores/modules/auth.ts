import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

import { AuthAction, AuthState } from "@/stores/interface";

export type AuthStoreState = AuthState & AuthAction;

export const useAuthStore = create<AuthStoreState>()(
  immer(set => ({
    // 按钮权限
    authButtonList: [],
    setAuthButtonList: authButtonList => set({ authButtonList })
  }))
);
