import { action, observable } from "mobx";

const store = observable(
    {
        status: "",
        guessCnt: 0,
        guess: ["","","","","",""],
        appendCurrentGuess: action((data: string) => {
            if(store.guessCnt>=6) {
                store.status = "No chance left!";
                return false;
            }
            const newGuess = store.guess.slice();
            newGuess[store.guessCnt] += data;
            store.guess = newGuess;
        }),
        popCurrentGuess: action(() => {
            const newGuess = store.guess.slice();
            if(newGuess[store.guessCnt].length-1>=0) newGuess[store.guessCnt] = newGuess[store.guessCnt].substring(0,newGuess[store.guessCnt].length-1);
            store.guess = newGuess;
        }),
        attemptGuess: action(async () => {
            if(store.guess[store.guessCnt].length < 4) {
                store.status = "Not enough length!";
                return false;
            }
            // let found = await cangjie.findCharacters(store.guess[store.guessCnt]);
            const found = true;
            if(!found) {
                return false;    
            }
            store.guessCnt++;
            store.guess = store.guess.slice();
            store.status = "";
            return true;
        })
    }
);

export default store;