import { useContext } from "react";
import ReactHowler from "react-howler";
import GameContext from "../../context/GameContext";
import backsound from "../../assets/sounds/click.wav";
import { useState } from "react";
import logo from "../../assets/images/logo.webp";

function Card({ character, isFlipped, setIsFlipped}) {
    const { handleSelectCard } = useContext(GameContext);
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = async () => {
        setIsClicked(true);
        setIsFlipped(true);

        setTimeout(() => {
            handleSelectCard(character);
            setTimeout(() => {
                setIsFlipped(false);
            }, 500);
        }, 500);
    };

    let innerClass = isFlipped ? "card-inner is-flipped " : 
    "card-inner";

    return (
        <div className="card" onClick={handleClick}>
            <ReactHowler
            src={backsound}
            preload={false}
            playing={isClicked}
            volume={0.2}
            />
            <div className={innerClass}>
                <div className="card-face card-face-front border-2 rounded-lg p-4 gap-4">

                        <img
                            className="border-2 rounded-lg"
                            src={character.img}
                            width="100%"
                            height="100%"
                            alt={character.name}
                        />


                    <div className="card-content">
                        <h3>{character.name}</h3>

                    </div>
                </div>
                <div className="card-face card-face-back  border-2 rounded-lg gap-4">
                <img
                        className="w-96" 
                        src={logo}  
                        alt="Ena Logo"
                        />
                </div>
            </div>
        </div>
    )

}

export default Card;