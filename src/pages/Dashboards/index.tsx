import { Button, LinearProgress } from "@mui/material";

import { useAppConfig } from "@/stores";
import AuthButton from "@/components/AuthButton";

const Home: React.FC = () => {
  const switchMenuAsideStatus = useAppConfig(state => state.switchMenuAsideStatus);

  return (
    <div className="flex-1">
      <Button color="primary" onClick={() => switchMenuAsideStatus()}>
        改变menu显示状态
      </Button>
      <LinearProgress sx={{ maxWidth: "360px" }} />
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
      <div className="mt-[10px]">
        <p className="text-lg font-bold">按钮权限校验</p>
        <AuthButton authority="dashboard_add">
          <Button>首页新增</Button>
        </AuthButton>
        <AuthButton authority="xxxxxx">
          <Button>测试不存在的标识符</Button>
        </AuthButton>
        <AuthButton authority="dashboard_edit">
          <Button>首页编辑</Button>
        </AuthButton>
        <AuthButton authority="dashboard_delete">
          <Button>首页删除</Button>
        </AuthButton>
      </div>
    </div>
  );
};

export default Home;
