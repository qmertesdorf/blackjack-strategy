import React from "react";
import Card from "./Card";

function DealerHand({cardData}) {
  console.log("DealerHand is", cardData)
  return (
    <div>
      {/* TODO - vvv Update "unknown" card information */}
      <Card
        {...{
          suitId: cardData.suitId,
          value: cardData.value.cardValKey
        }}
      />
      <Card
        {...{
          suitId: cardData.suitId,
          value: cardData.value.cardValKey
        }}
      />
    </div>
  );
}


export default DealerHand;