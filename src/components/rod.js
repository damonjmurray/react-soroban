import React from 'react';
import PropTypes from 'prop-types';
import Bead from '../containers/bead';

const Rod = (props) => {
  const divStyle = { float: 'right', border: '1px solid #cbcbcb' };
  const beamStyle = { height: '20px', width: '100%', backgroundColor: 'black' };

  const renderBeads = () => {
    const beads = props.beads.map((bead, i) =>
      <Bead key={ i } beadIndex={ i } rodIndex={ props.rodIndex } { ...bead } />
    );

    return [
      ...beads.slice(0, 1),
      <div key='beam' style={ beamStyle }></div>,
      ...beads.slice(1)
    ];
  };

  return (
    <div style={ divStyle }>
      { renderBeads() }
    </div>
  );
}

export default Rod;
