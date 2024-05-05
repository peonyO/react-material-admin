import { useState } from "react";

import { Button } from "@mui/material";

import AuthButton from "@/components/AuthButton";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[1000px]">
      <p className="text-lg font-bold">按钮权限校验</p>
      <AuthButton authority="dashboard_add">
        <Button onClick={() => setCount(count + 1)}>首页新增</Button>
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
