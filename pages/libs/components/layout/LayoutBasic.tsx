import { Box, Stack } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Head from "next/head";

const withLayoutBasic = (Component: any) => {
    return (props: any) => {
        return (
            <>
                <Head>
                    <title>Nestar</title>
                </Head>
                <Stack id="pc-wrap">
                    <Stack sx={{ background: green[700], height: "40vh ", justifyContent: "center", alignItems: "center" }}>
                        <Box>Header Basic</Box>
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

export default withLayoutBasic;