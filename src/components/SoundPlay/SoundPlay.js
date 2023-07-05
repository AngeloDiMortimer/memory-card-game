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
                {icon ? <i className="volume up"></i> : <i className="volume mute"></i>}
            </Button>
        </div>
    )
}

export default SoundPlay;