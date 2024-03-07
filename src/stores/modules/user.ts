import { UserAction, UserState } from "@/stores/interface";
import { create } from "zustand";

export type UserStoreState = UserState & UserAction;

export const useUserStore = create<UserStoreState>()(set => ({
  userInfo: null,
  setUserInfo: userInfo => set({ userInfo })
}));
