import React from 'react';
import PropTypes from 'prop-types';

class Bead extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };

    this.clickHandler = this.clickHandler.bind(this);
  }

  getDivStyle() {
    const activeColor = '#80664d';
    const inactiveColor = '#cc6600';

    return {
      height: '50px',
      width: '70px',
      backgroundColor: this.state.active ? activeColor : inactiveColor,
      border: '1px dashed #ffffff'
    }
  }

  clickHandler() {
    const active = !this.state.active;
    this.setState({ active });
    this.props.onUpdate(active ? this.props.value : -this.props.value);
  }

  render() {
    return (
      <div style={ this.getDivStyle() } onClick={ this.clickHandler }></div>
    );
  }
};

Bead.propTypes = {
  value: PropTypes.number.isRequired
};

export default Bead;
