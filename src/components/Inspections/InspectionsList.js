import React from 'react';
import InspectionsForm from './InspectionsForm.js';
import inspectionsData from '../../inspectionData.json';
import InspectionsItem from './InspectionsItem'; //test
import '../styles/list.scss';

import axios from 'axios';

class InspectionsList extends React.Component {
    state = {
        inspectionsList: [],
        formOpen: false
    }
    // ---------------------Actual API call---------------------
    // componentDidMount() {
    //   fetch('http://localhost/api/inspections')
    //   .then(response => {
    //     if(response.ok) return response
    //     throw Error(response.status)
    //   })
    //   .then( response => response.json())
    //   .then( data => {
    //     this.setState({
    //       inspectionsList:[...data]
    //     })
    //   })
    //   .catch( error => console.log(error))
    // }
//---------------------------------------------------------------------------
    //-----------------TEMPORARY JSON FETCH--------------------
    // delete later
    componentDidMount() {
        this.setState(prevState => ({
        inspectionsList: [...prevState.inspectionsList, ...inspectionsData]
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
    // add inspection
    handleAddInspection = (inspection) => {
        // send POST to API
        // axios.post('http://localhost/api/inspections', inspection);
        const newInspection = [...this.state.inspectionsList, inspection];
        this.setState( prevState => (
          {
            inspectionsList: newInspection,
            formOpen: false
          }
        ))
    }
//---------------------------------------------------------------------------
  // edit student
  handleEditInspection = (editedInspection, editedInspectionForAPI) => {
    const newList = this.state.inspectionsList.map( current => {
      if(current.id === editedInspection.id) return {...editedInspection}
      else return current
    });

    this.setState( prevState => (
      {
        inspectionsList: newList,
        formOpen: false
      }
    ));

    // send PUT to API
    // axios.put(`http://localhost/api/inspections`, editedInspectionForAPI);
  }
//---------------------------------------------------------------------------
    // delete inspection with given ID
    handleDelete = (id) => {
        this.setState(prevState => ({
            inspectionsList: prevState.inspectionsList.filter(current => current.id !== id)
        }));

        // send DELETE to API
        // axios.delete(`http://localhost/api/inspections/${id}`);
    }
//---------------------------------------------------------------------------
    render() {
        return (
            <div className="list">
                
            <h1 className="list__title">InspectionsList</h1>

            <div className="list__button" onClick={() => this.handleOpenForm()}>
                {this.state.formOpen ? 'Close Form' : 'Open form'}
            </div>

            { this.state.formOpen && <InspectionsForm handleAddInspection={this.handleAddInspection}/> }

            {this.state.inspectionsList.map(current => (
            // <div key={current.id} className="list__item">
            //     <h2>Inspection</h2>
            //     <p><b>Date:</b> <span>{current.date}</span></p>
            //     <p><b>Well Maintained:</b> <span>{current.wellMentained ? 'yes' : 'no'}</span></p>
            //     <p><b>Comments:</b> <span>{current.comments}</span></p>
            //     <h2>Place</h2>
            //     <p><b>Place number:</b> <span>{current.place.placeNumber}</span></p>
            //     <p><b>Place rent:</b> <span>{current.place.rentrate}</span></p>
            //     <h2>Staff</h2>
            //     <p><b>Name:</b> <span>{current.staff.name} {current.staff.surname}</span></p>
            //     <p><b>Phone:</b> <span>{current.staff.phone}</span></p>
            //     <p><b>Address:</b> <span>{current.staff.address.address}</span></p>
            //     <p><b>Role:</b> <span>{current.staff.role.name}</span></p>
            //     <button className="delete" onClick={() => this.handleDelete(current.id)}>Delete</button>
            // </div>
            // <InspectionsItem current={current} handleDelete={this.handleDelete} handleEditStudent={this.handleEditStudent} key={current.id} />
            <InspectionsItem current={current} handleDelete={this.handleDelete} handleEditInspection={this.handleEditInspection} key={current.id} />
            ))}

      </div>
        )
    }
};

export default InspectionsList
