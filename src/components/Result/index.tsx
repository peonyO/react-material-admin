import { ElementType } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

interface Props {
  imageElement?: React.ReactNode;
  components?: ElementType;
  title?: string;
  subTitle?: string;
  imageSrc?: string;
  extra?: React.ReactNode;
}

const Result: React.FC<Props> = ({ imageElement, components, title, subTitle, imageSrc, extra }) => {
  return (
    <Container component={components || "main"}>
      <Stack textAlign="center" mx="auto">
        <Box>
          <Typography component={"h3"} fontWeight="bold" fontSize="28px" mb="16px">
            {title}
          </Typography>
          <Typography component={"p"} fontSize="16px" lineHeight="1.5">
            {subTitle}
          </Typography>
          {imageElement ? (
            imageElement
          ) : (
            <Typography component={"img"} src={imageSrc} width="400px" mx="auto" my="40px"></Typography>
          )}
          {extra}
        </Box>
      </Stack>
    </Container>
  );
};

export default Result;
