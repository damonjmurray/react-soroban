import React from 'react';
import Rod from './rod';

const Soroban = (props) => {
  const divStyle = {
    display: 'inline-block',
    border: '5px solid #000000'
  };

  return (
    <div style={ divStyle }>
      { /* The standard Japanese Soroban has 13 rods */ }
      {
        [...Array(13).keys()].map((i) =>
          <Rod key={ i } placeValue={ Math.pow(10, i) } />
        )
      }
    </div>
  );
};

export default Soroban;
