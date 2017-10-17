import React from 'react';
import PropTypes from 'prop-types';
import Rod from '../containers/rod';

const Soroban = (props) => {
  const frameStyle = { display: 'inline-block', border: '5px solid #000000', float: 'left' };

  const resetButtonStyle = {
    backgroundColor: 'silver',
    width: '40px',
    height: '25px',
    float: 'left',
    marginTop: '55px'
  };

  const updateRod = () => {
    props.rodUpdated();
  };

  const renderRods = () => {
    return props.rods.map((rod, i) =>
      <Rod key={ i } rodIndex = { i } placeValue={ rod.placeValue } onUpdate={ props.rodUpdated } />
    )
  };

  return (
    <div>
      <div style={ frameStyle }>
        { renderRods() }
      </div>

      <div style={ resetButtonStyle } onClick={ props.reset }></div>
    </div>
  );
}

export default Soroban;
