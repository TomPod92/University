import React from 'react';
import '../styles/edit.scss';

class InspectionsEdit extends React.Component {
  state = {
    date: this.props.inspection.date,
    wellMaintained: this.props.inspection.wellMaintained,
    comments: this.props.inspection.comments,
    place: undefined,
    staff: undefined
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
  handleSubmit = (event) => {
    event.preventDefault();

    const editedInspection = {
      ...this.props.inspection,
      date: this.state.date,
      wellMaintained: this.state.wellMaintained,
      comments: this.state.comments,
    }

    const editedInspectionForAPI = {
      id: this.props.inspection.id,
      date: this.state.date,
      wellMaintained: this.state.wellMaintained,
      comments: this.state.comments,
      place: 88,
      staff: 70
    };

    this.props.handleEditInspection(editedInspection,editedInspectionForAPI);
    this.props.handleEditOpen();
  }

  render() {
    return (
      <form className="edit" onSubmit={(event) => this.handleSubmit(event)}>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="date">Date</label>
          <input className="inputContainer__input" type="date" id="date" name="date" onChange={(event) => this.handleInputChange(event)} value={this.state.date} autoFocus required/>
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
          <input className="inputContainer__input" type="text" id="comments" name="comments" onChange={(event) => this.handleInputChange(event)} value={this.state.comments} autoFocus/>
        </div>


        <button className="form__button" type="submit">Add</button>
      </form>
    )
  }
}

export default InspectionsEdit;