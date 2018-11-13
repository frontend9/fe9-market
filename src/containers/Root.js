import { connect } from "react-redux";
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    message: state.test
  }
}

export default connect(
  mapStateToProps
)(App)