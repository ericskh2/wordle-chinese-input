import Box from "@mui/material/Box";
import { FC, useState } from "react";

interface IPuzzleBox {

    character?: string;

    match?: string;
}

const PuzzleBox: FC<IPuzzleBox> = ({character, match}: IPuzzleBox) => {

    character = character ? character : " ";

    match = match || "white";
    
    return <Box sx={{width:50, height: 50, fontSize:"2rem", border: "2px solid", backgroundColor: match}}>{character}</Box>;
}

export default PuzzleBox;