import React, { useContext } from "react";

import Button from "../components/Button/Button";
import GameContext from "../context/GameContext";

function StartPage({ handleStartGame }) {
    const { setDifficulty } = useContext(GameContext);

    function handleButton(difficulty) {
        setDifficulty(difficulty);
        handleStartGame();
    }

    return (
        <div className="start-page">
            <h1>MEMORY GAME</h1>
            <div className="difficulty">
                <Button classN="button-easy" onClick={() => handleButton("easy")}>
                    Easy
                </Button>
                <Button classN="button-medium" onClick={() => handleButton("medium")}>
                    Medium
                </Button>
                <Button classN="button-hard" onClick={() => handleButton("hard")}>
                    Hard
                </Button>
            </div>
        </div>
    )

}

export default StartPage;