import { observer } from "mobx-react";
import { reaction } from 'mobx'
import { Box } from "@mui/material";
import { FC, useEffect, useMemo, useState } from "react";
import PuzzleRow from './PuzzleRow'
import GuessStore from "../../mobx/GuessStore";

const rowCnt = 6;

const Puzzle:FC = () => {
    
    const [status,setStatus]  = useState("");
    const [puzzle,setPuzzle] = useState<JSX.Element[]>([...Array(rowCnt).keys()].map((i)=><PuzzleRow key={i} guess="" guessed={false}/>));

    useEffect(()=>reaction(()=>GuessStore.status,()=>{
        setStatus(GuessStore.status);    
    }))

    useEffect(()=>
        reaction(()=>GuessStore.guess,()=>{
            setPuzzle(GuessStore.guess.map((g,i)=>{return <PuzzleRow key={i} guess={g} guessed={i<GuessStore.guessCnt}/>;}));
        })      
    ,[]);

    return (
        <Box sx={{textAlign:"center"}}>
            <p>{status}</p>
            {puzzle}
        </Box>
    )
}

export default Puzzle;