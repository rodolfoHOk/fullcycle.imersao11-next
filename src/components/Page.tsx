import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export const Page = (props: PropsWithChildren) => {
  return (
    <Container sx={{ paddingTop: (theme) => theme.spacing(3) }}>
      {props.children}
    </Container>
  );
};
