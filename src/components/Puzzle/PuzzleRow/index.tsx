import { Stack } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Answer from "../../../utils/Answer";
import PuzzleBox from "../PuzzleBox";

const boxCnt = 4;

interface IPuzzleRow {
    guess: string,
    guessed: boolean
}

const PuzzleRow: FC<IPuzzleRow> = ({guess, guessed}:IPuzzleRow) => {
    
    const matching = () => {
        const result = Array(boxCnt).fill("white");
        if(!guessed) return result;
        const len = Answer.answer.length;
        for(let i=0; i<len; i++) {
            if(Answer.answer[i]==guess[i]) result[i] = "lightgreen";
        }
        for(let i=0; i<len; i++) {
            if(Answer.answer[i]==guess[i]) continue;
            for(let j=0; j<len; j++) {
                if(i==j) continue;
                if(Answer.answer[i]==guess[j]) {
                    result[j] = "yellow";
                    break;    
                }
            }
        }
        return result;
    }

    const match = matching();

    return (
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        py={1}
        >
            {
                [...Array(boxCnt).keys()].map((i)=>{
                    if(guess.length<=i) return <PuzzleBox key={i} match={match[i]}/>
                    else return <PuzzleBox key={i} character={guess[i]} match={match[i]}/>;
                })
            }
        </Stack>
    )
}

export default PuzzleRow;