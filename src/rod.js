import React from 'react';
import Bead from './bead';

const Rod = (props) => {
  return (
    <div className='rod'>
      <Bead value='5' />
      <Bead value='1' />
      <Bead value='1' />
      <Bead value='1' />
      <Bead value='1' />
    </div>
  );
};

export default Rod;
