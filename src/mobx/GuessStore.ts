import { action, observable } from "mobx";

const store = observable(
    {
        guessCnt: 0,
        guess: ["","","","","",""],
        appendCurrentGuess: action((data: string) => {
            const newGuess = store.guess.slice();
            newGuess[store.guessCnt] += data;
            store.guess = newGuess;
        }),
        popCurrentGuess: action(() => {
            const newGuess = store.guess.slice();
            if(newGuess[store.guessCnt].length-1>=0) newGuess[store.guessCnt] = newGuess[store.guessCnt].substring(0,newGuess[store.guessCnt].length-1);
            store.guess = newGuess;
        }),
        attempGuess: action(() => {
            store.guessCnt++;
            store.guess = store.guess.slice();
        })
    }
);

export default store;