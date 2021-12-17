import React, { useEffect, useState } from "react";
import axios from "axios";
import CardU from "./CardU";
import { Row } from "react-bootstrap";

export default function Cards(props) {
  const [cards, setCards] = useState([
    {
      id: "pinkcoin",
      image: "../assets/images/brush2.png",
      title: "PINK",
      text: "Current peoples :",
      price: undefined,
    },
    {
      id: "water",
      image: "../assets/images/water.svg",
      title: "WATER",
      text: "Current value :",
      price: undefined,
    },
    {
      id: "paint-swap",
      image: "../assets/images/bath.png",
      title: "BRUSH",
      text: "Current value :",
      price: undefined,
    },
  ]);

  useEffect(async () => {
    const pairIds = props.pairIds;
    const formatIds = pairIds.join("%2C");
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${formatIds}&vs_currencies=usd`;

    axios.get(url).then(({ data }) => {
      pairIds.forEach((id) => {
        const price = data[id]["usd"];

        const copyCards = [...cards]; // create a shallow copy of cards
        const cardUpdate = copyCards.find((card) => card.id === id); // find card in cards by id
        cardUpdate["price"] = price; // assign card price

        setCards(copyCards); // update react cards
        console.log(copyCards);
      });

      // get price from data
      console.log(cards);
    });
    // get price from data
    console.log(cards);
  }, []); // only runs after mount the component

  return (
    <Row>
      <div className="caards">
        {cards.map((card) => {
          return (
            <CardU
              image={card.image}
              title={card.title}
              text={card.text}
              price={card.price}
            />
          );
        })}
      </div>
    </Row>
  );
}
