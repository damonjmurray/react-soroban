import React from 'react';
import Rod from './rod';

const Soroban = (props) => {
  const divStyle = {
    display: 'inline-block',
    border: '5px solid #000000'
  };

  const rodUpdateHandler = (rodValue) => {
    // TODO: appropriately handle soroban total value calculation
    console.log(rodValue);
  };

  const buildRod = (key, placeValue) =>
    <Rod key={ key } placeValue={ placeValue } onUpdate={ rodUpdateHandler } />;

  return (
    <div style={ divStyle }>
      { /* The standard Japanese Soroban has 13 rods */ }
      {
        [...Array(13).keys()].map((i) =>
          buildRod(i, Math.pow(10, i))
        )
      }
    </div>
  );
};

export default Soroban;
