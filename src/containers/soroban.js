import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Soroban from '../components/soroban';
import { rodUpdated, reset } from '../actions/soroban';

const mapStateToProps = (state) => {
  return { rods: state.soroban.rods };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    rodUpdated,
    reset
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Soroban);
