import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { create } from "zustand";

import { AppConfigState, AppConfigAction } from "../interface";

type AppConfigStore = AppConfigState & AppConfigAction;

export const useAppConfig = create<AppConfigStore>()(
  immer(
    persist(
      set => ({
        menuMode: "vertical",
        menuAsideStatus: "default",
        setMenuMode: mode => set({ menuMode: mode }),
        setMenuAsideStatus: status => set({ menuAsideStatus: status })
      }),
      {
        name: "peony-app-config"
      }
    )
  )
);
