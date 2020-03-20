import React, { useState}  from 'react';
import { connect } from 'react-redux';

const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    })

    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
        console.log("New smurf info", newSmurf)
    }

    const addSmurf = e => {
        e.preventDefault();
        setNewSmurf({...newSmurf, id: new Date()});
        console.log("newSmurf on click", newSmurf)
    }


    return (
        <div>
          <form>
            <input 
              label="Name"
              id="name"
              name="name"
              type="text"
              value={newSmurf.name}
              onChange={handleChanges}
              placeholder="Name"
              />
            <input 
              label="Age"
              id="age"
              name="age"
              type="number"
              value={newSmurf.age}
              onChange={handleChanges}
              placeholder="Age"
              />
            <input 
              label="Height"
              id="height"
              name="height"
              type="text"
              value={newSmurf.height}
              onChange={handleChanges}
              placeholder="Height"
              />
              <button onClick={ addSmurf }>Add Smurf!</button>
          </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        villageData: state.villageData,
    }
}

export default connect( mapStateToProps, {} )(SmurfForm)