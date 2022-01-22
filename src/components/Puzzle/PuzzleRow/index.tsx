import { Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import PuzzleBox from "../PuzzleBox";

const boxCnt = 4;

const PuzzleRow: FC<string> = (guess: string) => {

    const [boxes, setBoxes] = useState([...Array(boxCnt).keys()].map((i)=>{
        if(guess.length<=i) return <PuzzleBox key={i}/>
        else return <PuzzleBox key={i} character={guess[i]}/>;
    }));

    useEffect(()=>{
        console.log(guess);
    },[guess]);
    
    return (
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        py={1}
        >
            {boxes}
        </Stack>
    )
}

export default PuzzleRow;