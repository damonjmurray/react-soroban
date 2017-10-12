import React from 'react';
import PropTypes from 'prop-types';
import Bead from './bead';

class Rod extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rodValue: 0 };
    this.divStyle = { float: 'right', border: '1px solid #cbcbcb' };
    this.beamStyle = { height: '20px', width: '100%', backgroundColor: 'black' };

    this.beadUpdatedHandler = this.beadUpdatedHandler.bind(this);
  }

  beadUpdatedHandler(beadValue) {
    let rodValue = this.state.rodValue + (beadValue * this.props.placeValue);
    this.setState({ rodValue });
    this.props.onUpdate(rodValue);
  };

  buildBead(beadValue) {
    return <Bead value={ beadValue } onUpdate={ this.beadUpdatedHandler } />;
  }

  render() {
    return (
      <div style={ this.divStyle }>
        { /* heaven bead */ }
        { this.buildBead(5) }

        { /* beam */ }
        <div style={ this.beamStyle }></div>

        { /* earth beads */ }
        { this.buildBead(1) }
        { this.buildBead(1) }
        { this.buildBead(1) }
        { this.buildBead(1) }
      </div>
    );
  }
}

Rod.propTypes = {
  placeValue: PropTypes.number.isRequired
};

export default Rod;
