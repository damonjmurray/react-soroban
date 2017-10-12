import React from 'react';
import PropTypes from 'prop-types';
import Bead from './bead';

const Rod = (props) => {
  const divStyle = {
    float: 'right',
    border: '1px solid #cbcbcb'
  };

  const beamStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: 'black'
  };

  const beadUpdatedHandler = (beadValue) => {
    props.onUpdate(beadValue * props.placeValue);
  };

  const buildBead = (beadValue) =>
    <Bead value={ beadValue } onUpdate={ beadUpdatedHandler } />;

  return (
    <div style={ divStyle }>
      { /* heaven bead */ }
      { buildBead(5) }

      { /* beam */ }
      <div style={ beamStyle }></div>

      { /* earth beads */ }
      { buildBead(1) }
      { buildBead(2) }
      { buildBead(3) }
      { buildBead(4) }
    </div>
  );
};

Rod.propTypes = {
  placeValue: PropTypes.number.isRequired
};

export default Rod;
