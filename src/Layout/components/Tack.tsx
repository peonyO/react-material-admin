import { memo } from "react";

import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import AlbumTwoToneIcon from "@mui/icons-material/AlbumTwoTone";

import { AppConfigState } from "@/stores/interface";
import { useAppConfig } from "@/stores";

const SwitchButton: React.FC<{ menuAsideStatus: AppConfigState["menuAsideStatus"] }> = ({ menuAsideStatus }) => {
  switch (menuAsideStatus) {
    case "default":
      return <AlbumTwoToneIcon color="primary" />;
    case "collapsed":
      return <CircleTwoToneIcon color="primary" />;
    default:
      return <></>;
  }
};

interface Props {
  isSpread: boolean;
  onSwitch: () => void;
}

const Tack: React.FC<Props> = ({ isSpread, onSwitch }) => {
  const { menuAsideStatus, switchMenuAsideStatus } = useAppConfig(state => ({
    menuAsideStatus: state.menuAsideStatus,
    switchMenuAsideStatus: state.switchMenuAsideStatus
  }));

  return (
    <span
      className={
        "flex cursor-pointer items-center transition-[opacity] duration-300 ease-in-out" +
        (isSpread ? " opacity-1" : " opacity-0")
      }
      onClick={() => {
        switchMenuAsideStatus();
        onSwitch();
      }}
    >
      <SwitchButton menuAsideStatus={menuAsideStatus} />
    </span>
  );
};

export default memo(Tack);
