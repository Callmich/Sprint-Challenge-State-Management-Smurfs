import React, { useState}  from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
export const UPDATE_VILLAGE = "UPDATE_VILLAGE";
export const SET_ERROR = 'SET_ERROR';



const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: ''
    })

    const addToVillage = () => {
        axios
          .post('http://localhost:3333/smurfs', newSmurf)
          .then(res => {
              console.log('New Smurf Added?', res.data)
            //   dispatch({ type: UPDATE_VILLAGE, payload: res.data})
          })
          .catch(err => {
              console.log("Prooobs",err)
            //   dispatch({ type: SET_ERROR, payload: "The Smurfs are hiding - check your AXIOS call"})
          })
    }


    const handleChanges = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
        console.log("New smurf info", newSmurf)
    }

    const addSmurf = e => {
        e.preventDefault();
        setNewSmurf({...newSmurf, id: new Date()});
        console.log("newSmurf on click", newSmurf)
        addToVillage(e)
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