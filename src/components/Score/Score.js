import React, { useContext } from "react";
import GameContext from "../../context/GameContext";

function Score() {
    const { state } = useContext(GameContext);

    return (
        <div className="score-container">
            <h2>Score: {state.score}</h2>
            <h2>Best Score: {state.bestScore}</h2>
        </div>
    );
}

export default Score;