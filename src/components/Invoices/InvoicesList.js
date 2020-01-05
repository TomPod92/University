import React from 'react';
import invoicesData from '../../invoicesData.json';
import InvoicesForm from './InvoicesForm.js';
import '../styles/list.scss';

import axios from 'axios';

class InvoicesList extends React.Component {
  state = {
    invoicesList: [],
    formOpen: false
  }
  // ---------------------Actual API call---------------------
  componentDidMount() {
    // fetch('http://localhost/api/invoices')
    // .then(response => {
    //   if(response.ok) return response
    //   throw Error(response.status)
    // })
    // .then( response => response.json())
    // .then( data => {
    //   this.setState({
    //     invoicesList:[...data]
    //   })
    // })
    // .catch( error => console.log(error))
  }
  //---------------------------------------------------------------------------
  //-----------------TEMPORARY JSON FETCH--------------------
  // delete later
  componentDidMount() {
    this.setState(prevState => ({
      invoicesList: [...prevState.invoicesList, ...invoicesData]
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
  // add invoice 
  handleAddLease = (newInvoice) => {
    const newList = [...this.state.invoicesList, newInvoice]
    this.setState( prevState => (
      {
        invoicesList: newList,
        formOpen: false
      }
    ))
  }
  //---------------------------------------------------------------------------
  // delete lease with given ID
  handleDelete(id) {
    this.setState(prevState => ({
      invoicesList: prevState.invoicesList.filter(current => current.id !== id)
    }));

    // send DELETE to API
    // axios.delete(`http://localhost/api/invoices/${id}`);
  }
//---------------------------------------------------------------------------
  render() {
    return (
      <div className="list">

        <h1 className="list__title">Invoices List</h1>

        <div className="list__button" onClick={() => this.handleOpenForm()}>
          {this.state.formOpen ? 'Close Form' : 'Open form'}
        </div>

        { this.state.formOpen && <InvoicesForm handleAddLease={this.handleAddLease}/> }

        {this.state.invoicesList.map(current => (
          <div key={current.id} className="list__item">
            <h2>Invoice</h2>
            <p><b>Semester:</b> <span>{current.semester}</span></p>
            <p><b>Payment due:</b> <span>{current.paymentDue}</span></p>
            <p><b>Payment date:</b> <span>{current.paymentDate}</span></p>
            <p><b>Reminder date:</b> <span>{current.secondReminderDate}</span></p>

            <h2>Lease</h2>
            <p><b>Duration:</b><span>{current.lease.duration}</span></p>
            <p><b>Start:</b><span>{current.lease.start}</span></p>
            <p><b>End:</b><span>{current.lease.end}</span></p>
            <p><b>Facility:</b><span>{current.lease.facility.address}</span></p>
            <p><b>Room:</b><span>{current.lease.room.placeNumber}</span></p>
            <p><b>Rentrate:</b><span>{current.lease.room.rentrate}</span></p>
            
            <h2>Student</h2>
            <p><b>Name:</b><span>{current.lease.student.name}{current.lease.student.surname}</span></p>
            <p><b>Advisor:</b><span>{current.lease.student.advisor.name}{current.lease.student.advisor.surname}</span></p>

            <h2>Payment</h2>
            <p><b>Method:</b><span>{current.paymentMethod.name}</span></p>

            <button className="delete" onClick={() => this.handleDelete(current.id)}>Delete</button>
          </div>
        ))}
        
      </div>
    )
  }
};

export default InvoicesList;