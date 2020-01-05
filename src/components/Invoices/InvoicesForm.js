import React from 'react';
import '../styles/list.scss';

import axios from 'axios';

class InvoicesForm extends React.Component {
  state = {
    semester: 1,
    paymentDue: undefined,
    paymentDate: undefined,
    secondReminderDate: false,
    dataError: false
  }
//-------------------------------------------------------
  checkDates() {
    const paymentDue = new Date(this.state.paymentDue);
    const paymentDate = new Date(this.state.paymentDate);
    const isEarlier = paymentDue.valueOf() < paymentDate.valueOf();

    if(!isEarlier) {
      this.setState({
        dataError: true
      })
      return true
    } else {
      this.setState({
        dataError: false
      })
      return false
    }
  }
//-------------------------------------------------------
  handleFormSubmit(event) {
    event.preventDefault();
    const error = this.checkDates();

    if(error) return;
    
    // send POST to API
    // axios.post('http://localhost/api/student', newLease);

    const newInvoice = {
      id: Math.floor(Math.random()*(1000-1+1)+1),
      semester: this.state.semester,
      paymentDue: this.state.paymentDue,
      paymentDate: this.state.paymentDate,
      secondReminderDate: this.state.secondReminderDate,
      lease: {
          id: Math.floor(Math.random()*(1000-1+1)+1),
          duration: 299,
          start: "2011-11-21T21:03:32+00:00",
          end: "1991-03-30T19:02:29+00:00",
          facility: {
              id: Math.floor(Math.random()*(1000-1+1)+1),
              address: "370 Judy Club Apt. 089\nPort Deron, MO 42055"
          },
          room: {
              placeNumber: 86,
              rentrate: 893
          },
          student: {
              id: Math.floor(Math.random()*(1000-1+1)+1),
              name: "Rosie",
              surname: "Waters",
              advisor: {
                  id: Math.floor(Math.random()*(1000-1+1)+1),
                  name: "Graham",
                  surname: "Mertz",
                  phone: 799977877,
                  address: {
                      id: 302,
                      address: "47936 Wisoky Summit Apt. 661\nNorth Miltonville, AZ 85724"
                  },
                  role: {
                      id: Math.floor(Math.random()*(1000-1+1)+1),
                      name: "Role consequuntur"
                  }
              },
              category: {
                  id: Math.floor(Math.random()*(1000-1+1)+1),
                  name: "Student Category dolores"
              },
              course: {
                  id: Math.floor(Math.random()*(1000-1+1)+1),
                  name: "Course voluptatibus"
              },
              status: {
                  id: Math.floor(Math.random()*(1000-1+1)+1),
                  name: "Status consequatur"
              }
          }
      },
      paymentMethod: {
          id: 30,
          name: "Payment method illum"
      }
  }

    // send call to API
    this.props.handleAddLease(newInvoice);
  }
//-------------------------------------------------------
  handleInputChange(event) {
    let value = event.target.value;

    if(!isNaN(value)) value = parseInt(value);
    this.setState({
      [event.target.name]: value
    })
  }
//-------------------------------------------------------
render() {
  return (
    <form className="form" onSubmit={(event) => this.handleFormSubmit(event)}>

      { this.state.dataError && <div className="form__error">Incorrect dates</div> }

      <div className="inputContainer">
        <label className="inputContainer__label" htmlFor="semester">Semester</label>
        <select name="semester" id="semester" value={this.state.semester} autoFocus onChange={(event) => this.handleInputChange(event)} required>
          <option value={1}>1st semester</option>
          <option value={2}>2nd semester</option>
          <option value={3}>3rd semester</option>
          <option value={4}>4th semester</option>
          <option value={5}>5th semester</option>
          <option value={6}>6th semester</option>
          <option value={7}>7th semester</option>
          <option value={8}>8th semester</option>
        </select>
      </div>

      <div className="inputContainer">
        <label className="inputContainer__label" htmlFor="paymentDue">Payment due</label>
        <input className="inputContainer__input" type="date" id="paymentDue" name="paymentDue" onChange={(event) => this.handleInputChange(event)} required/>
      </div>

      <div className="inputContainer">
        <label className="inputContainer__label" htmlFor="paymentDate">Payment date</label>
        <input className="inputContainer__input" type="date" id="paymentDate" name="paymentDate" onChange={(event) => this.handleInputChange(event)} required/>
      </div>

      <div className="inputContainer">
        <label className="inputContainer__label" htmlFor="secondReminderDate">Second Reminder Date</label>
        <input className="inputContainer__input" type="date" id="secondReminderDate" name="secondReminderDate" onChange={(event) => this.handleInputChange(event)} required/>
      </div>
      
      <button className="form__button" type="submit">Add</button>

    </form>
  )
}
};

export default InvoicesForm;