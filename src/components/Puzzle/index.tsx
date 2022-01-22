import { observer } from "mobx-react";
import { reaction } from 'mobx'
import { Box } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import PuzzleRow from './PuzzleRow'
import GuessStore from "../../mobx/GuessStore";
import { autorun } from "mobx";

const rowCnt = 6;

const Puzzle:FC = observer(() => {
    
    const [puzzle,setPuzzle] = useState<JSX.Element[]>([...Array(rowCnt).keys()].map((i)=><PuzzleRow key={i} guess=""/>));

    useEffect(()=>
        reaction(()=>GuessStore.currentGuess,()=>{
            const guessCnt = GuessStore.guessCnt;
            const newPuzzle = puzzle.slice();
            newPuzzle[guessCnt] = <PuzzleRow key={guessCnt} guess=""></PuzzleRow>
            setPuzzle(newPuzzle);
        })    
    ,[]);
    return (
        <Box>
            {puzzle}
        </Box>
    )
}
)
export default Puzzle;