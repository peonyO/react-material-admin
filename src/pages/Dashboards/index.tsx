import { Button } from "@mui/material";

import AuthButton from "@/components/AuthButton";

const Home: React.FC = () => {
  return (
    <div>
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
  );
};

export default Home;
