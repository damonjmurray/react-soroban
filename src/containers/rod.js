import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Rod from '../components/rod';
import { getCurrentRod } from '../reducers/rods';
import { getCurrentBeads } from '../reducers/beads';

const mapStateToProps = (state, { rodIndex }) => {
  return Object.assign(
    {},
    getCurrentRod(state, rodIndex),
    { beads: getCurrentBeads(state.soroban.beads, rodIndex) }
  );
};

export default connect(mapStateToProps)(Rod);
