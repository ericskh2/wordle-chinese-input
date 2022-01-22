import { observable } from "mobx";

const store = observable(
    {
        guessCnt: 0,
        currentGuess: "",
        setCurrentGuess: (data: string) => {
            if(this) this.currentGuess = data;
        }
    }
);

export default store;