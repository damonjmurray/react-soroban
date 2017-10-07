import React from 'react';
import PropTypes from 'prop-types';

const Bead = (props) => {
  const divStyle = {
    height: '50px',
    width: '70px',
    backgroundColor: '#cc6600',
    border: '1px dashed #ffffff'
  };

  return (
    <div style={ divStyle }>
    </div>
  );
};

Bead.propTypes = {
  value: PropTypes.number.isRequired
};

export default Bead;
