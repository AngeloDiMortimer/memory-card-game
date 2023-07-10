import React, { useState } from "react";
import Card from "../Card/Card";
import Tilt from 'react-parallax-tilt';

function CardList({cards}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="cards-container flex items-center flex-wrap gap-8 justify-center">
            {
                cards.map( c => (
                    <Tilt key={c.id} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                        <Card character={c} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                    </Tilt>
                ))
            }
        </div>
    )
}
export default CardList;