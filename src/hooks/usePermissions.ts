import { getStorage, logError } from "@/utils";
import { useUserStore } from "@/stores";
import { getUserInfoService } from "@/services";

/**
 * @description  Use permissions hook
 */
export const usePermissions = () => {
  const setUserInfo = useUserStore(state => state.setUserInfo);

  const initPermissions = async () => {
    const token = getStorage("tokenInfo");
    if (token) {
      try {
        const userInfo = await getUserInfoService();
        setUserInfo(userInfo.result);
      } catch (error) {
        logError("@permissions", error);
      }
    }
  };

  return { initPermissions };
};
