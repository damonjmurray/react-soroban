import React from 'react';
import PropTypes from 'prop-types';
import Rod from './rod';

class Soroban extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, rodValues: [] };
    this.frameStyle = { display: 'inline-block', border: '5px solid #000000', float: 'left' };
    this.resetButtonStyle = {
      backgroundColor: 'silver',
      width: '40px',
      height: '25px',
      float: 'left',
      marginTop: '55px'
    };

    this.rodUpdatedHandler = this.rodUpdatedHandler.bind(this);
    this.resetRods = this.resetRods.bind(this);
  }

  rodUpdatedHandler(rodId, rodValue) {
    const rodValues = this.state.rodValues;
    rodValues[rodId] = rodValue;

    const value = rodValues.reduce((acc, val) => acc + val, 0);
    this.setState({ value, rodValues });
    console.log(value);
  };

  buildRod(key, placeValue) {
    return <Rod key={ key } rodId = { key } placeValue={ placeValue } onUpdate={ this.rodUpdatedHandler } />;
  }

  resetRods() {
    // TODO: hmmm, this wont work until bead state is accessible... time to roll in redux :P
    console.log('reset');
    this.setState({ rodValues: [...Array(this.props.rods).keys()].map(() => 0) });
  }

  render() {
    return (
      <div>
        <div style={ this.frameStyle }>
          {
            [...Array(this.props.rods).keys()].map((i) => this.buildRod(i, Math.pow(10, i)))
          }
        </div>
        <div style={ this.resetButtonStyle } onClick={ this.resetRods }></div>
      </div>
    );
  }
}

Soroban.propTypes = {
  rods: PropTypes.number.isRequired
};

Soroban.defaultProps = {
  rods: 13 // The standard Japanese Soroban has 13 rods
};

export default Soroban;
