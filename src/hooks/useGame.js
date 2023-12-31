import { useEffect, useReducer, useState } from "react";
import {getCharactersDifficulty, resetCharacters } from "../services/loadImages";
import shuffle from "../utils/shuffle";

const initialState = {
    score: 0,
    bestScore: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SCORE":
            return {
                ...state,
                score: state.score + 1,
                bestScore:
                    state.bestScore < state.score + 1 ? state.score + 1 : state.bestScore,
            };
        case "RESTART":
            return {
                ...state,
                score: 0,
            };
        default:
            //Gives an error
            return state;
    }
};

const useGame = () => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [deckOfCards, setDeckOfCards] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isWin, setIsWin] = useState(false);
    const [isGameOver, setIsGameOVer] = useState(false);
    const [difficulty, setDifficulty] = useState('easy');
    const [maxScore, setMaxScore] = useState(0);

    useEffect(() => {
        setDeckOfCards(shuffle(difficulty));
        setMaxScore(getCharactersDifficulty(difficulty).length);
    }, [difficulty]);

    
    useEffect(() => {
        resetGameState();
    }, [isWin, isGameOver]);

    useEffect(() => {
        let array = getCharactersDifficulty(difficulty);
        if(state.score === array.length) {
            setIsWin(true);
            setIsGameOVer(false);
        }
    });

    function handleSelectCard(character) {
        if (!selectedCards.includes(character)) {
            setSelectedCards([...selectedCards, character]);
            character.clicked = true;
            dispatch({ type: "ADD_SCORE"})
        } else {
            setIsGameOVer(true);
            setIsWin(false);
            setSelectedCards([]);
        }
        setDeckOfCards(shuffle(difficulty));
    }

    function resetGame() {
        setIsWin(false);
        setIsGameOVer(false);
    }

    function resetGameState() {
        dispatch({type: 'RESTART'})
        setSelectedCards([]);
        resetCharacters();
    }

    return {
        state,
        dispatch,
        isWin,
        isGameOver,
        handleSelectCard,
        selectedCards,
        deckOfCards,
        setDeckOfCards,
        setDifficulty,
        maxScore,
        resetGame,
        resetGameState
    }
}

export { useGame };