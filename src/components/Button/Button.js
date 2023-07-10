import React from "react";
import ReactHowler from "react-howler";
import backsound from "../../assets/sounds/click.wav";

function Button({ children, classN, buttonClick}) {
    return (
        <button className={`${classN} button text-2xl md:text-4xl hover:text-amber-300`} onClick={buttonClick}>
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
