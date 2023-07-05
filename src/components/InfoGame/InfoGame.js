import { useState } from "react";
import Button from "../Button/Button";

function InfoGame() {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState("?");

    const handleButton = () => {
        setShow((s) => !s);
        
        icon === "?" ? setIcon("X") : setIcon("?"); //Toggles between ? and X depending of the state

    };

    return (
        <div className="info">
            {show && (
                <div className="message-info">
                    <p>Don't click on the same card twice</p>
                </div> 
            )}

            <Button classN="info-button" buttonClick={handleButton}>
                {icon}
            </Button>
        </div>
    )
}

export default InfoGame;