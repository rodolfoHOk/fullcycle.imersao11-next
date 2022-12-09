import { Box } from "@mui/material";
import { NextPage } from "next";
import { MatchResult } from "../../components/MatchResult";
import { Page } from "../../components/Page";

const ListMatchesPage: NextPage = () => {
  return (
    <Page>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: (theme) => theme.spacing(3),
        }}
      >
        <MatchResult
          match={{
            id: "1",
            match_date: "12/12/2022 12:00",
            team_a: "Brasil",
            team_b: "Argentina",
            result: "1-0",
            actions: [],
          }}
        />

        <MatchResult
          match={{
            id: "1",
            match_date: "12/12/2022 12:00",
            team_a: "Brasil",
            team_b: "Argentina",
            result: "1-0",
            actions: [],
          }}
        />

        <MatchResult
          match={{
            id: "1",
            match_date: "12/12/2022 12:00",
            team_a: "Brasil",
            team_b: "Argentina",
            result: "1-0",
            actions: [],
          }}
        />
      </Box>
    </Page>
  );
};

export default ListMatchesPage;
