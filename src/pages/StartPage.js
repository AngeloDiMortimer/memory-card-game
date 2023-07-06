import React, { useContext } from "react";
import logo from "../assets/images/logo.webp"
import Button from "../components/Button/Button";
import GameContext from "../context/GameContext";

function StartPage({ handleStartGame }) {
    const { setDifficulty } = useContext(GameContext);

    function handleButton(difficulty) {
        setDifficulty(difficulty);
        handleStartGame();
    }

    return (
        <div className="start-page flex flex-col items-center sticky">
            <img src={logo}  alt="Ena Logo"/>
            <h1 className="text-6xl">MEMORY GAME</h1>
            <div className="difficulty flex flex-col text-2xl gap-4">
                <Button classN="button-easy" buttonClick={() => handleButton("easy")}>
                    Easy
                </Button>
                <Button classN="button-medium" buttonClick={() => handleButton("medium")}>
                    Medium
                </Button>
                <Button classN="button-hard" buttonClick={() => handleButton("hard")}>
                    Hard
                </Button>
            </div>
        </div>
    )

}

export default StartPage;