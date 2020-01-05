import React from 'react';
import '../styles/edit.scss';

class StudentsEdit extends React.Component {
  state = {
    name: this.props.student.name,
    surname: this.props.student.surname
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const editedStudent = {
      ...this.props.student,
      name: this.state.name,
      surname: this.state.surname
    }

    const editedStudentForAPI = {
      id: this.props.student.id,
      name: this.state.name,
      surname: this.state.surname,
      advisor: 70,
      category: 67,
      course: 66,
      status: 69,
      nextOfKin: [
        {id: 46, relationship:"sister"}, 
        {id: 47, relationship: "brother"}
      ]
    };

    this.props.handleEditStudent(editedStudent,editedStudentForAPI);
    this.props.handleEditOpen();

  }

  render() {
    return (
        
        <form className="edit" onSubmit={(event) => this.handleSubmit(event)}>

          <div className="inputContainer">
            <label className="inputContainer__label" htmlFor="name">Name</label>
            <input className="inputContainer__input" type="text" id="name" name="name" onChange={(event) => this.handleInputChange(event)} value={this.state.name} autoFocus required/>
          </div>

          <div className="inputContainer">
            <label className="inputContainer__label" htmlFor="surname">Surame</label>
            <input className="inputContainer__input" type="text" id="surname" name="surname" onChange={(event) => this.handleInputChange(event)} value={this.state.surname} required/>
          </div>


          <button className="edit__button" type="submit">Save</button>

      </form>
    )
  }
};

export default StudentsEdit;