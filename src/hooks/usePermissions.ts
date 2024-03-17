import { getStorage, logError } from "@/utils";
import { useAuthStore, useUserStore } from "@/stores";
import { getUserInfoService, getButtonListService } from "@/services";

/**
 * @description 用户权限
 */
export const usePermissions = () => {
  const setUserInfo = useUserStore(state => state.setUserInfo);
  const setButtonList = useAuthStore(state => state.setAuthButtonList);

  const initPermissions = async () => {
    const tokenInfo = getStorage("tokenInfo");
    if (tokenInfo) {
      try {
        // 获取按钮权限
        const { result: authButtonList } = await getButtonListService();
        setButtonList(authButtonList);

        const userInfo = await getUserInfoService();

        setUserInfo(userInfo.result);
      } catch (error) {
        logError("@getUserInfoService", error);
      }
    }
  };

  return { initPermissions };
};
