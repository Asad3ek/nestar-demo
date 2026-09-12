import { Box, Container, Stack } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutMain from "./libs/components/layout/LayoutHome";

const Home: NextPage = () => {
  return (
    <>

      <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", background: blue[800], color: "white" }}>
        <Stack flexDirection={"column"}>

          <Stack>
            <Stack className="container">
              HOME PAGE
            </Stack>
          </Stack>

          <Stack>
            <Stack className="container">
              Trend Properties
            </Stack>
          </Stack>

          <Stack>
            <Stack className="container">
              Popular Properties
            </Stack>
          </Stack>

          <Stack>
            <Stack className="container">
              Events
            </Stack>
          </Stack>

          <Stack>
            <Stack className="container">
              Top Agents
            </Stack>
          </Stack>

        </Stack>
      </Stack>
    </>
  );
};

export default withLayoutMain(Home); 
