import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/smurfActions'

//import action for getting data

const SmurfHeader = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (

        <div>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          {props.isFetchingData ? (<div>How many Smurfs Can Live in a Village?</div>) : (<button onClick={handleGetData}>Check out the village!</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFaetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(SmurfHeader)
