import { connect } from "react-redux";
import Results from "../components/Results";

const mapStateToProps = (state) => { 
    return {
        listings: state.querie
    }
    
}

export default connect(mapStateToProps)(Results)