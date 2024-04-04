import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard.js";

export default function LearnCards() {
  const [cards, setCards] = useState([]);

  return (
    <div className="learnPageMainDiv">
      <h2 className="learnPageMainDiv__title">Expand your Knowledge!</h2>

      <div>
        <SingleCard />
      </div>
    </div>
  );
}
