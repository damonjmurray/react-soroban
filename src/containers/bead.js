import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bead from '../components/bead';
import { beadToggled } from '../actions/bead';
import { getCurrentBead } from '../reducers/beads';

const mapStateToProps = (state, { beadIndex, rodIndex }) => {
  return getCurrentBead(state.soroban.beads, rodIndex, beadIndex);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ beadToggled }, dispatch);
};

const mergeProps = (currentBead, { beadToggled }) => {
  return {
    active: currentBead.active,
    toggleBead: () => beadToggled(currentBead)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Bead);
