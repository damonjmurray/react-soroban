import { connect } from 'react-redux';
import Soroban from '../components/soroban';

const mapStateToProps = (state) => {
  return { rods: state.rods };
}

const mapDispatchToProps = (state, dispatch) => {
  return {
    updateTotal: (value) => dispatch({ type: 'UPDATE TOTAL', value })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Soroban);
