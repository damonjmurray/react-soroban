import React from 'react';
import PropTypes from 'prop-types';

const Bead = (props) => {
  const getDivStyle = () => {
    const activeColor = '#80664d';
    const inactiveColor = '#cc6600';

    return {
      height: '50px',
      width: '70px',
      backgroundColor: props.active ? activeColor : inactiveColor,
      border: '1px dashed #ffffff'
    }
  }

  const clickHandler = () => props.toggleBead();

  return (
    <div style={ getDivStyle() } onClick={ clickHandler }></div>
  );
};

export default Bead;
