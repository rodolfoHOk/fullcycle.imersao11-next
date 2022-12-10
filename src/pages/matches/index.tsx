import { Box } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { MatchResult } from "../../components/MatchResult";
import { Page } from "../../components/Page";
import { useHttp } from "../../hooks/useHttp";
import { fetcherStats } from "../../util/http";
import { Match } from "../../util/models";

const ListMatchesPage: NextPage = () => {
  const router = useRouter();
  const { data: matches } = useHttp<Match[]>("/matches", fetcherStats, {
    refreshInterval: 5000,
  });

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
        {matches?.map((match, key) => (
          <Box
            key={key}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`/matches/${match.id}`)}
          >
            <MatchResult match={match} />
          </Box>
        ))}
      </Box>
    </Page>
  );
};

export default ListMatchesPage;
