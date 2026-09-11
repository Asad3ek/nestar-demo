import { Box, Container, Stack } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: green[400], height: "50vh ", justifyContent: "center", alignItems: "center" }}>
        <Box>HEADER</Box>
      </Stack>
      <Container sx={{ display: 'flex', justifyContent: "center", alignItems: "center", background: blue[800], color: "white" }}>
        <Stack flexDirection={"column"}>
          <Box>HOME PAGE</Box>
          <Box>Trend Properties</Box>
          <Box>Popular Properties</Box>
          <Box>Events</Box>
          <Box>Top Agents</Box>

        </Stack>
      </Container>
      <Stack sx={{ background: grey[500], height: "40vh ", justifyContent: "center", alignItems: "center" }}>FOOTER</Stack>
    </>
  );
}
