import { Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <Typography component="span" display="inline-block">
      {children}
    </Typography>
  );
};

export default Tag;
