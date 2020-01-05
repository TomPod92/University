import React from 'react';
import studentData from '../../studentData.json';
import StudentsForm from './StudentsForm.js';
import StudentsItem from './StudentsItem'; //test
import '../styles/list.scss';

import axios from 'axios';

class StudentsList extends React.Component {
  state = {
    studentsList: [],
    formOpen: false
  }
  // ---------------------Actual API call---------------------
  // componentDidMount() {
  //   fetch('http://localhost/api/student')
  //   .then(response => {
  //     if(response.ok) return response
  //     throw Error(response.status)
  //   })
  //   .then( response => response.json())
  //   .then( data => {
  //     console.log('data', data)
  //     this.setState({
  //       studentsList:[...data]
  //     })
  //   })
  //   .catch( error => console.log(error))
  // }
  
//---------------------------------------------------------------------------
  //-----------------TEMPORARY JSON FETCH--------------------
  // delete later
  componentDidMount() {
    this.setState(prevState => ({
      studentsList: [...prevState.studentsList, ...studentData]
    }));
  }
//---------------------------------------------------------------------------
  // open Add Student form
  handleOpenForm() {
    this.setState( prevState => (
      {
        formOpen: !prevState.formOpen
      }
    ))
  }
//---------------------------------------------------------------------------
  // add student 
  handleAddStudent = (newStudent) => {
    const newList = [...this.state.studentsList, newStudent]
    this.setState( prevState => (
      {
        studentsList: newList,
        formOpen: false
      }
    ))
  }
//---------------------------------------------------------------------------
  // edit student
  handleEditStudent = (editedStudent, editedStudentForAPI) => {
    const newList = this.state.studentsList.map( current => {
      if(current.id === editedStudent.id) return {...editedStudent}
      else return current
    });

    this.setState( prevState => (
      {
        studentsList: newList,
        formOpen: false
      }
    ));

    // send PUT to API
    // axios.put(`http://localhost/api/student`, editedStudentForAPI);
  }
//---------------------------------------------------------------------------
  // delete student with given ID
  handleDelete = (id) => {
    this.setState(prevState => ({
      studentsList: prevState.studentsList.filter(current => current.id !== id)
    }));

    // send DELETE to API
    // axios.delete(`http://localhost/api/student/${id}`);
  }
//---------------------------------------------------------------------------
  render() {
    return (
      <div className="list">

        <h1 className="list__title">Students List</h1>

        <div className="list__button" onClick={() => this.handleOpenForm()}>
          {this.state.formOpen ? 'Close Form' : 'Open form'}
        </div>

        { this.state.formOpen && <StudentsForm handleAddStudent={this.handleAddStudent}/> }
        
        {this.state.studentsList.map(current => (
          <StudentsItem current={current} handleDelete={this.handleDelete} handleEditStudent={this.handleEditStudent} key={current.id} />
        ))}

      </div>
    )
  }
};

export default StudentsList;