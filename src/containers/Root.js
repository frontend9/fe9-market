import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    message: state.test
  }
}

export default withRouter(connect(
  mapStateToProps
)(App))