import { getStorage, logError } from "@/utils";
import { useUserStore } from "@/stores";
import { getUserInfoService } from "@/services";

/**
 * @description 用户权限
 */
export const usePermissions = () => {
  const setUserInfo = useUserStore(state => state.setUserInfo);

  const initPermissions = async () => {
    const tokenInfo = getStorage("tokenInfo");
    if (tokenInfo) {
      try {
        const userInfo = await getUserInfoService();
        setUserInfo(userInfo.result);
      } catch (error) {
        logError("@getUserInfoService", error);
      }
    }
  };

  return { initPermissions };
};
