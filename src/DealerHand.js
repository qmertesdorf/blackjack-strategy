import * as React from 'react';
import Card from "./Card";

export function DealerHand(props) {
  const { cardData } = props;
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
};