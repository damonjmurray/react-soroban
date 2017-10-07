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

  return (
    <div style={ divStyle }>
      { /* heaven bead */ }
      <Bead value={ 5 } />

      { /* beam */ }
      <div style={ beamStyle }></div>

      { /* earth beads */ }
      <Bead value={ 1 } />
      <Bead value={ 1 } />
      <Bead value={ 1 } />
      <Bead value={ 1 } />
    </div>
  );
};

Rod.propTypes = {
  placeValue: PropTypes.number.isRequired
};

export default Rod;
