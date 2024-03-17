import { Button, LinearProgress } from "@mui/material";

import { useAppConfig } from "@/stores";

const Home: React.FC = () => {
  const switchMenuAsideStatus = useAppConfig(state => state.switchMenuAsideStatus);

  console.log("-----");
  return (
    <div className="flex-1">
      <Button color="primary" onClick={() => switchMenuAsideStatus()}>
        改变menu显示状态
      </Button>
      <LinearProgress sx={{ maxWidth: "360px" }} />
    </div>
  );
};

export default Home;
