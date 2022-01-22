import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const Navbar: FC = () => {
    return (
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        px={2}
        py={5}
        >   
            <Typography variant="h3">Wordle</Typography>
            <Typography>Help</Typography>
        </Stack>
    )
}

export default Navbar;