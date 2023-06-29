import { v4 as uuidv4 } from "uuid";

import enaImg from "../assets/images/characters/ena.webp";
import enaBbqImg from "../assets/images/characters/ena_bbq.webp";
import moonyImg from "../assets/images/characters/moony.webp";
import dogImg from "../assets/images/characters/hourglass_dog.webp";
import froggyImg from "../assets/images/characters/froggy.webp";
import merchantImg from "../assets/images/characters/Merchant.webp";
import misteryWoman from "../assets/images/characters/mistery_woman.webp";
import shepherdImg from "../assets/images/characters/The_Shepherd.webp";
import ulyssesImg from "../assets/images/characters/Ulysses.webp";
import coralImg from "../assets/images/characters/CoralGlasses.webp";

const characters = [
    {
        id: uuidv4(),
        name: "Ena",
        img: enaImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Ena BBQ",
        img: enaBbqImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Moony",
        img: moonyImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Hourglass Dog",
        img: dogImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Froggy",
        img: froggyImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Merchant",
        img: merchantImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Mistery Woman",
        img: misteryWoman,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Shepherd",
        img: shepherdImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Ulysses",
        img: ulyssesImg,
        clicked: true,
    },
    {
        id: uuidv4(),
        name: "Coral Glasses",
        img: coralImg,
        clicked: true,
    },
];

const characterEasy = getCharacters(5); //gets 5 random characters
const characterMedium = getCharacters(7); //gets 7 random characters
const characterHard = getCharacters(10); //gets all 10 characters in random positions

function getCharacters(lenght) {
    let newArr = [];

    for (let i = 0; i < lenght; i++) {
        let randomNumber;
        let isInclude = false;
        while (!isInclude) {
            randomNumber = Math.floor(Math.random() * characters.length); //chooses a random character from array

            if (!newArr.includes(characters[randomNumber])) {
                isInclude = true;
            }
        }
        newArr.push(characters[randomNumber]);
    }
    return newArr;
}

function getCharactersDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy':
            return characterEasy;
        
        case 'medium':
            return characterMedium;
        
        case 'hard':
            return characterHard;
        
        default:
            break;
    }
}

function resetCharacters() {
    characters.forEach((c) => {
        c.clicked = false;
    });
}

function isAllClicked(list) {
    let allChecked = list.filter((c) => c.clicked === false);
    console.log(
        list.map((c) => {
            return {
                click: c.clicked,
                name: c.name,
            };
        })
    );

    return allChecked.length === 0;
}

export {characters, getCharacters, resetCharacters, isAllClicked, getCharactersDifficulty };