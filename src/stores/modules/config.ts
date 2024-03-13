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
        switchMenuMode: () => set({ menuMode: get().menuMode === "vertical" ? "horizontal" : "vertical" }),
        switchMenuAsideStatus: () => set({ menuAsideStatus: get().menuAsideStatus === "default" ? "collapsed" : "default" })
      }),
      {
        name: "peony-app-config"
      }
    )
  )
);
