import React from 'react';
import { connect } from 'react-redux';

const SmurfVillage = props => {


    return (
      <div>
        {props.error ? (<div>{props.error}</div>): props.villageData.map(smurf => (
            <div>
                <h5>Smurf! {smurf.name}</h5>
            </div>))}
      </div>
    )
}

const mapStateToProps = state => {
    return {
        villageData: state.villageData,
        error: state.error
    }
}

export default connect( mapStateToProps, {} )(SmurfVillage)