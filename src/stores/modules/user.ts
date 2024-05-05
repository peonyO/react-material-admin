import { create } from "zustand";

import { UserAction, UserState } from "@/stores/interface";

export type UserStore = UserState & UserAction;

export const useUserStore = create<UserStore>()(set => ({
  userInfo: null,
  setUserInfo: userInfo => set({ userInfo })
}));
