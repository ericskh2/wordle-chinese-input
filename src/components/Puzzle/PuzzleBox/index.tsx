import Box from "@mui/material/Box";
import { FC, useState } from "react";

interface IPuzzleBox {

    character?: string;
}
const PuzzleBox: FC<IPuzzleBox> = ({character}: IPuzzleBox) => {

    character = character ? character : " ";

    return <Box sx={{width:50, height: 50, fontSize:"2rem", border: "2px solid"}}>{character}</Box>;
}

export default PuzzleBox;