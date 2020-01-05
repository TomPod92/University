import React from 'react';
import '../styles/form.scss';

class StudentsForm extends React.Component {

  state = {
    name: '',
    surname: ''
  }
//-------------------------------------------------------
  async handleFormSubmit(event) {
    event.preventDefault();

    const newStudentForAPI = {
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

    // send POST to API
    // const id = await axios.post('http://localhost/api/student', newStudentForAPI);

    const newStudent = {
      id: Math.floor(Math.random()*(1000-1+1)+1),
      name: this.state.name,
      surname: this.state.surname,
      advisor: {
        id: Math.floor(Math.random()*(1000-1+1)+1),
        name: "Loyce",
        surname: "Beatty",
        phone: 521352347,
        address: {
            id: Math.floor(Math.random()*(1000-1+1)+1),
            address: "4412 Webster Motorway\nEast Elaina, ME 24091"
        },
        role: {
            id: Math.floor(Math.random()*(1000-1+1)+1),
            name: "Role consequuntur"
        }
      },
      category: {
          id: Math.floor(Math.random()*(1000-1+1)+1),
          name: "Student Category animi"
      },
      course: {
          id: Math.floor(Math.random()*(1000-1+1)+1),
          name: "Course voluptatibus"
      },
      status: {
          id: Math.floor(Math.random()*(1000-1+1)+1),
          name: "Status ex"
      }
    }

    this.props.handleAddStudent(newStudent);
  }
//-------------------------------------------------------
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
//-------------------------------------------------------
  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleFormSubmit(event)}>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="name">Name</label>
          <input className="inputContainer__input" type="text" id="name" name="name" onChange={(event) => this.handleInputChange(event)} autoFocus required/>
        </div>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="surname">Surame</label>
          <input className="inputContainer__input" type="text" id="surname" name="surname" onChange={(event) => this.handleInputChange(event)} required/>
        </div>


        <button className="form__button" type="submit">Add</button>

      </form>
    )
  }
};

export default StudentsForm;