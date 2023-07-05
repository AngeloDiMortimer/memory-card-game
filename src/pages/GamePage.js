import React, { useContext } from "react";
import GameContext from "../context/GameContext";
import Modal from "../components/Modal/Modal";
import Win from "../components/Win/Win";
import GameOver from "../components/GameOver/GameOver";
import Score from "../components/Score/Score";
import CardList from "../components/CardList/CardList";

function GamePage({ started }) {
    const {isWin, isGameOver, deckOfCards, maxScore, selectedCards, resetGameState } =
    useContext(GameContext);

    const viewModal = () => {
        if (isWin) {
            return <Modal open={true} content={<Win />} />;
        } else if (isGameOver) {
            return <Modal open={true} content= {<GameOver />} />;
        }
    };

    return (
        <div className="game-page">
            <div className="header">
                <div 
                    className="logo"
                    onClick={() => {
                        resetGameState();
                        started(false);
                    }}
                >
                    <h1>ENA GAME</h1>
                </div>
                <Score />
            </div>

            <div className="game-cards">
                <CardList cards={deckOfCards} />
                <p>
                    {selectedCards.length}/{maxScore}
                </p>
            </div>
            
            <div>{viewModal()}</div>
        </div>
    )
}

export default GamePage;