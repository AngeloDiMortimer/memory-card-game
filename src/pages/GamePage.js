import React, { useContext } from "react";
import GameContext from "../context/GameContext";
import logo from "../assets/images/logo.webp";
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
        <div className="game-page flex flex-col gap-4">
            <div className="header flex justify-between">
                <div 
                    className="logo"
                    onClick={() => {
                        resetGameState();
                        started(false);
                    }}
                >
                    <img
                        className="w-36 md:w-52" 
                        src={logo}  
                        alt="Ena Logo"
                        />
                </div>
                <Score />
            </div>

            <div className="game-cards flex flex-col items-center gap-16 md:text-2xl">
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