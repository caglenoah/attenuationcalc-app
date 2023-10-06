import { connect } from "react-redux";
import NewQuery from "../components/NewQuery";
import { newQuery } from "../redux/actions"
    
const mapStateToProps = (state) => { 
    return {
        listings: state.listings
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)