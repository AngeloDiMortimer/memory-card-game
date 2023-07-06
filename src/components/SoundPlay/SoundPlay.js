import React, {useState} from "react";
import Button from "../Button/Button";

function SoundPlay() {
    const [icon, setIcon] = useState(true);

    const handleButton = () => {
        if (icon) {
            setIcon(false);
            window.Howler.mute(true);
        } else {
            setIcon(true);
            window.Howler.mute(false);
        }
    };

    return (
        <div className="sound">
            <Button classN="info-button sound-button" buttonClick={handleButton}>
                {icon ? <p className="volume up text-3xl">Sound</p> : <p className="volume mute text-3xl">Mute</p>}
            </Button>
        </div>
    )
}

export default SoundPlay;