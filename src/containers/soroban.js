import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Soroban from '../components/soroban';
import { resetBeads } from '../actions/soroban';

const mapStateToProps = (state) => {
  return { rods: state.soroban.rods };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resetBeads }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Soroban);
