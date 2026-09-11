import { Box, Stack } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
    return (props: any) => {
        return (
            <>
                <Head>
                    <title>Nestar</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack sx={{ background: green[400], height: "50vh ", justifyContent: "center", alignItems: "center" }}>
                        <Box>HEADER MAIN</Box>
                    </Stack>

                    <Stack id={"main"}>
                        <Component {...props} />
                    </Stack>

                    <Stack sx={{
                        background: grey[500],
                        height: "40vh ", justifyContent: "center",
                        alignItems: "center"
                    }}
                    >
                        <Box> FOOTER</Box>
                    </Stack>

                </Stack>
            </>
        );
    };
};

export default withLayoutMain;