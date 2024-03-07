import { Box, Container, Stack, Typography } from "@mui/material";
import { ElementType } from "react";

interface Props {
  components?: ElementType;
  title?: string;
  subTitle?: string;
  imageSrc?: string;
  extra?: React.ReactNode;
}

const Result: React.FC<Props> = ({ components, title, subTitle, imageSrc, extra }) => {
  return (
    <Container component={components || "main"}>
      <Stack className="max-w-[400px] text-center mx-auto">
        <Box>
          <Typography component={"h3"} className="font-bold text-[28px] text-[#333] mb-[16px]">
            {title}
          </Typography>
          <Typography component={"p"} className="text-[16px] leading-[1.5] text-[#637381]">
            {subTitle}
          </Typography>
          <Typography component={"img"} src={imageSrc} className="w-[400px] mx-auto my-[40px]"></Typography>
          {extra}
        </Box>
      </Stack>
    </Container>
  );
};

export default Result;
