import { Box, Container, Stack } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutMain from "./libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <>

      <Container sx={{ display: 'flex', justifyContent: "center", alignItems: "center", background: blue[800], color: "white" }}>
        <Stack flexDirection={"column"}>
          <Box>HOME PAGE</Box>
          <Box>Trend Properties</Box>
          <Box>Popular Properties</Box>
          <Box>Events</Box>
          <Box>Top Agents</Box>

        </Stack>
      </Container>
    </>
  );
};

export default withLayoutMain(Home); 
