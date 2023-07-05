import React, { useContext, useEffect, useRef} from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button/Button";

function Modal({ open, content }) {
    const { resetGame } = useContext(GameContext);

    if(!open) return null;

    return (
        <div className="modal-container">
            <div>
                {content}
            </div>
            <Button onclick={resetGame}>Restart</Button>
        </div>
    )
}

export default Modal;