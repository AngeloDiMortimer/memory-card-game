import React from "react";
import ReactHowler from "react-howler";
import backsound from "../../assets/sounds/click.wav";

function Button({ children, classN, buttonClick}) {
    return (
        <button className={`${classN} button`} onClick={buttonClick}>
            <ReactHowler 
                src={backsound}
                preload={false}
                playing={true}
                volume={0.2}
            />
            {children}
        </button>
    )
}

export default Button;
