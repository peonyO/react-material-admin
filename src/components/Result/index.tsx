import { ElementType } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

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
      <Stack textAlign="center" maxWidth="400px" mx="auto">
        <Box>
          <Typography component={"h3"} fontWeight="bold" fontSize="28px" mb="16px">
            {title}
          </Typography>
          <Typography component={"p"} fontSize="16px" lineHeight="1.5">
            {subTitle}
          </Typography>
          <Typography component={"img"} src={imageSrc} width="400px" mx="auto" my="40px"></Typography>
          {extra}
        </Box>
      </Stack>
    </Container>
  );
};

export default Result;
