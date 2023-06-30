import { getCharactersDifficulty, isAllClicked } from "../services/loadImages";
import { getDifficulty } from "./getLengthDifficulty";

function shuffle (difficulty) {
    let newArr = [];
    let list = getCharactersDifficulty(difficulty); //returns an array of all cards
    let length = getDifficulty(difficulty); //return a number of cards
    let allClicked = isAllClicked(list);

    for(let i = 0; i < length; i++) {
        let randomNumber;
        let isInclude = false;

        while(!isInclude) {
            randomNumber = Math.floor(Math.random() * list.length);
            if (!newArr.includes(list[randomNumber])) {
                isInclude = true;
            }
        }

        newArr.push(list[randomNumber]);
    }

    let allClickedNewArr = newArr.some( c => {
        return c.clicked === false;
    });
    console.log('allclicked', allClickedNewArr);

    if(!allClickedNewArr && !allClicked) {
        let indexRandom = Math.floor(Math.random() * length);
        let filterCharacters = list.filter(c => c.clicked === false );
        try {
            console.log(...newArr, 'ff');
            newArr[indexRandom] = filterCharacters[Math.floor(Math.random() * filterCharacters.length)];
            console.log(newArr, 'ff2');
        } catch (error) {
            console.log('ya clickeo todo');
        }
    } else {
        console.log('todo completado')
    }
    console.log('new array ', list);
    return newArr;

};

export default shuffle;