import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { create } from "zustand";

import { AppConfigState, AppConfigAction } from "../interface";

type AppConfigStore = AppConfigState & AppConfigAction;

export const useAppConfig = create<AppConfigStore>()(
  immer(
    persist(
      (set, get) => ({
        menuMode: "vertical",
        menuAsideStatus: "default",
        themeColor: "#ff3030",
        isGray: false,
        switchMenuMode: menuMode =>
          set({ menuMode: menuMode ? menuMode : get().menuMode === "vertical" ? "horizontal" : "vertical" }),
        switchMenuAsideStatus: menuAsideStatus =>
          set({
            menuAsideStatus: menuAsideStatus ? menuAsideStatus : get().menuAsideStatus === "default" ? "collapsed" : "default"
          }),
        changeThemeColor: color => set({ themeColor: color }),
        setGrayMode: isGray => set({ isGray })
      }),
      {
        name: "peony-app-config"
      }
    )
  )
);
