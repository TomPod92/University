import React from 'react';
import leasesData from '../../leasesData.json';
import LeasesForm from './LeasesForm.js';
import '../styles/list.scss';

import axios from 'axios';

class LeasesList extends React.Component {
  state = {
    leasesList: [],
    formOpen: false
  }
  // ---------------------Actual API call---------------------
  componentDidMount() {
    // fetch('http://localhost/api/leases')
    // .then(response => {
    //   if(response.ok) return response
    //   throw Error(response.status)
    // })
    // .then( response => response.json())
    // .then( data => {
    //   this.setState({
    //     leasesList:[...data]
    //   })
    // })
    // .catch( error => console.log(error))
  }
  //---------------------------------------------------------------------------
  //-----------------TEMPORARY JSON FETCH--------------------
  // delete later
  componentDidMount() {
    this.setState(prevState => ({
      leasesList: [...prevState.leasesList, ...leasesData]
    }));
  }
  //---------------------------------------------------------------------------
  // open Add Lease form
  handleOpenForm() {
    this.setState( prevState => (
      {
        formOpen: !prevState.formOpen
      }
    ))
  }
  //---------------------------------------------------------------------------
  // add student 
  handleAddLease = (newLease) => {
    const newList = [...this.state.leasesList, newLease]
    this.setState( prevState => (
      {
        leasesList: newList,
        formOpen: false
      }
    ))
  }
  //---------------------------------------------------------------------------
  // delete lease with given ID
  handleDelete(id) {
    this.setState(prevState => ({
      leasesList: prevState.leasesList.filter(current => current.id !== id)
    }));

    // send DELETE to API
    // axios.delete(`http://localhost/api/leases/${id}`);
  }
//---------------------------------------------------------------------------
  render() {
    return (
      <div className="list">

        <h1 className="list__title">Leases List</h1>
        
        <div className="list__button" onClick={() => this.handleOpenForm()}>
          {this.state.formOpen ? 'Close Form' : 'Open form'}
        </div>

        { this.state.formOpen && <LeasesForm handleAddLease={this.handleAddLease}/> }

        {this.state.leasesList.map(current => (
          <div key={current.id} className="list__item">
            <h2>Lease</h2>
            <p><b>Duration:</b> <span>{current.duration}</span></p>
            <p><b>Start:</b> <span>{current.start}</span></p>
            <p><b>End:</b> <span>{current.end}</span></p>

            <h2>Facility</h2>
            <p><b>Adress:</b><span>{current.facility.address}</span></p>
            
            <h2>Room</h2>
            <p><b>Room Number:</b><span>{current.room.placeNumber}</span></p>
            <p><b>Rentrate:</b><span>{current.room.rentrate}</span></p>

            <h2>Student</h2>
            <p><b>Name:</b><span>{current.student.name} {current.student.surname}</span></p>
            <p><b>Student Advisor:</b><span>{current.student.advisor.name} {current.student.advisor.surname}</span></p>


            <button className="delete" onClick={() => this.handleDelete(current.id)}>Delete</button>
          </div>
        ))}
      </div>
    )
  }
};

export default LeasesList;