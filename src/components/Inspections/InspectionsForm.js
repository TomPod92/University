import React from 'react';
import '../styles/form.scss';

class InspectionsForm extends React.Component {

  state = {
    date: '',
    wellMaintained: false,
    comments: '',
    place: undefined,
    staff: undefined
  }
//-------------------------------------------------------
  async handleFormSubmit(event) {
    event.preventDefault();

    const newInspectionForAPI = {
      date: this.state.date,
      wellMaintained: this.state.wellMaintained,
      comments: this.state.comments,
      place: 88,
      staff: 70
    }

    // send POST to API which will send ID back
    // const id = await axios.post('http://localhost/api/inspections', newInspectionForAPI);

    const newInspection = {
      id: Math.floor(Math.random()*(1000-1+1)+1),
      date: this.state.date,
      wellMaintained: this.state.wellMaintained,
      comments: this.state.comments,
      place: {
        placeNumber: 88,
        rentrate: 657
      },
      staff: {
        id: 70,
        name: "Loyce",
        surname: "Beatty",
        phone: 521352347,
        address: {
            id: 304,
            address: "4412 Webster Motorway\nEast Elaina, ME 24091"
        },
        role: {
            id: 66,
            name: "Role consequuntur"
        }
      }
    }

    this.props.handleAddInspection(newInspection)
  }
//-------------------------------------------------------
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //-------------------------------------------------------
  handleRadioChange(event) {
    if(event.target.value === 'true') {
      this.setState({
        wellMaintained: true
      });
    } else {
      this.setState({
        wellMaintained: false
      });
    }
  }
  //-------------------------------------------------------
  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleFormSubmit(event)}>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="date">Date</label>
          <input className="inputContainer__input" type="date" id="date" name="date" onChange={(event) => this.handleInputChange(event)} autoFocus required/>
        </div>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="wellMentained">Well Mentained:</label>
          <input
              type="radio"
              value="true"
              checked={this.state.wellMaintained}
              onChange={(event) => this.handleRadioChange(event)}
            />Yes
            <input
              type="radio"
              value="false"
              checked={!this.state.wellMaintained}
              onChange={(event) => this.handleRadioChange(event)}
            />No
        </div>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="comments">Comments:</label>
          <input className="inputContainer__input" type="text" id="comments" name="comments" onChange={(event) => this.handleInputChange(event)} autoFocus/>
        </div>


        <button className="form__button" type="submit">Add</button>

      </form>
    )
  }
};

export default InspectionsForm;