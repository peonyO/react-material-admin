import { create } from "zustand";

import { UserAction, UserState } from "@/stores/interface";

export type UserStoreState = UserState & UserAction;

export const useUserStore = create<UserStoreState>()(set => ({
  userInfo: null,
  setUserInfo: userInfo => set({ userInfo })
}));
