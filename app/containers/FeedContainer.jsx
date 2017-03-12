import { connect } from 'react-redux'
import Feed from '../components/Feed'
import axios from 'axios'

const mapStateToProps = state => ({
	grams: state.locaGrams.grams
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)