import { connect } from 'react-redux';
import Viewport from '../components/viewport';

const mapStateToProps = (state) => {
  // TODO: calculate from state
  return { value: 0 }
}

export default connect(mapStateToProps)(Viewport);
