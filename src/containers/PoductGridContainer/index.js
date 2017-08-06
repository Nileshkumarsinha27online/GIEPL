/*import the files from the required directory*/
import {ProductGrid} from '../../components/ProductGrid';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGridData } from '../../actions/ProductGrid';
/**
 * mapStateToProps maps the state to the props that are passed onto the components
 * @param state
 * @returns {{status}}
 */
function mapStateToProps(state){
    return {
		GridData:state.GridData.GridData.data
	};
}
/**
 * mapDispatchToProps maps the acton types as props that are passed onto the components
 * @param dispatch
 * @returns {Function|Object}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            fetchGridData : fetchGridData
        },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductGrid);