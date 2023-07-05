import React, { useState } from "react";
import Card from "../Card/Card";

function CardList({cards}) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="cards-container">
            {
                cards.map( c => (
                    <Card character={c} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                ))
            }
        </div>
    )
}
export default CardList;