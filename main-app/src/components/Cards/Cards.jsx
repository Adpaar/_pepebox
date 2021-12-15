import React, { useEffect, useState } from "react";
import axios from "axios";
import CardU from "./CardU";
import { Row } from "react-bootstrap";

export default function Cards(props) {
  const [price, setPrice] = useState(0);

  const [cards, setCards] = useState([
    {
      id: "botto",
      image: "",
      title: "title",
      text: "Current peoples :",
      price: undefined,
    },
    {
      id: "terra-luna",
      image: "",
      title: "title2",
      text: "Current value :",
      price: undefined,
    },
    {
      id: "bitcoin",
      image: "",
      title: "title3",
      text: "Current value :",
      price: undefined,
    },
  ]);

  useEffect(async () => {
    const pairIds = props.pairIds;
    const formatIds = pairIds.join("%2C");
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${formatIds}&vs_currencies=usd`;

    const { data } = await axios.get(url);

    pairIds.forEach((id) => {
      const price = data[id]["usd"];

      const copyCards = [...cards]; // create a shallow copy of cards
      const cardUpdate = copyCards.find((card) => card.id === id); // find card in cards by id
      cardUpdate["price"] = price; // assign card price

      setCards(copyCards); // update react cards
    });

    // get price from data
    console.log(cards);
  }, []); // only runs after mount the component

  return (
    <Row>
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
    </Row>
  );
}
