import React, { useContext, useEffect, useRef} from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button/Button";

function Modal({ open, content }) {
    const { resetGame } = useContext(GameContext);

    if(!open) return null;

    return (
        <div className="modal-container text-5xl">
            <div>
                {content}
            </div>
            <Button buttonClick={resetGame}>Restart</Button>
        </div>
    )
}

export default Modal;