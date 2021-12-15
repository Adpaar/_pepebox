import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataCard({ title, text }) {
  const [price, setPrice] = useState(0);

  useEffect(async () => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=botto%2Cterra-luna&vs_currencies=usd";

    const { data } = await axios.get(url);

    const price = data["botto"]["usd"];

    // get price from data
    setPrice(price);
  }, []); // only runs after mount the component

  return (
    <div>
      <p>{price}</p>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}
