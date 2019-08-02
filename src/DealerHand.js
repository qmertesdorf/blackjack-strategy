import * as React from 'react';
import Card from "./Card";

export function DealerHand(props) {
  const { card } = props;
  return (
    <div>
      {/* TODO - vvv Update "unknown" card information */}
      <Card
        {...{
          suitId: card.suitId,
          value: card.value
        }}
      />
      {/* <Card
        {...{
          suitId: card.suitId,
          value: card.value
        }}
      /> */}
    </div>
  );
};