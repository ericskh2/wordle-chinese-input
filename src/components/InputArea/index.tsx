import { Box } from "@mui/material";
import { FC, useEffect } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import GuessStore from "../../mobx/GuessStore";

const InputArea: FC = () => {

    useEffect(()=>{
        document.getElementsByClassName("hg-button-bksp")[0].innerHTML="Backspace"; 
        document.getElementsByClassName("hg-button-enter")[0].innerHTML="Enter";
    },[]);

    const onKeyPress = (button: string) => {
        if(button=="{enter}") GuessStore.attemptGuess();
        else if(button=="{bksp}") {
            GuessStore.popCurrentGuess();
        }
        else {
            GuessStore.appendCurrentGuess(button);
        } 
    }

    return (
        <Box py={5}>
            <Keyboard
            onKeyPress={onKeyPress}
            layout = {{
                'default': [
                  '手 田 水 口 廿 卜 山 戈 人 心 {bksp}',
                  '日 尸 木 火 土 竹 十 大 中',
                  '難 金 女 月 弓 一 {enter}',
                ],
                'shift': [
                    '手 田 水 口 廿 卜 山 戈 人 心 {bksp}',
                    '日 尸 木 火 土 竹 十 大 中',
                    '難 金 女 月 弓 一 {enter}',
                ]
              }}
            />
        </Box>
    )
}

export default InputArea;