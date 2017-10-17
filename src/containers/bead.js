import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Bead from '../components/bead';
import BeadActions from '../actions/bead';
import { getCurrentBead } from '../reducers/beads';

const mapStateToProps = (state, { beadIndex, rodIndex }) => {
  return getCurrentBead(state.soroban.beads, rodIndex, beadIndex);
};

const mapDispatchToProps = (dispatch, { beadIndex, rodIndex }) => {
  return bindActionCreators(BeadActions, dispatch);
};

const mergeProps = ({ active, beadIndex, rodIndex }, { beadActivated, beadDeactivated }) => {
  return {
    active,
    activate: () => beadActivated({ rodIndex, beadIndex }),
    deactivate: () => beadDeactivated({ rodIndex, beadIndex })
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Bead);
