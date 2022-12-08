import { Button } from "@mui/material";
import { NextPage } from "next";
import { Page } from "../components/Page";

const HomePage: NextPage = () => {
  return (
    <Page>
      <p>Todo: home page</p>
      <Button variant="contained">Teste</Button>
    </Page>
  );
};

export default HomePage;
