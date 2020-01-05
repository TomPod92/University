import React from 'react';
import '../styles/form.scss';

class LeasesForm extends React.Component {

  state = {
    duration: 1,
    start: undefined,
    end: undefined,
    dataError: false
  }
//-------------------------------------------------------
  checkDates() {
    const startDate = new Date(this.state.start);
    const endDate = new Date(this.state.end);
    const isEarlier = startDate.valueOf() < endDate.valueOf();

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

    const newLease = {
      id: Math.floor(Math.random()*(1000-1+1)+1),
      duration: this.state.duration,
      start: this.state.start,
      end: this.state.end,
      facility: {
        id: 334,
        address: "9996 Callie Cliffs Suite 802\nBradtkebury, WY 02511-6353"
      },
      room: {
        placeNumber: 89,
        rentrate: 875
      },
      student: {
        id: 210,
        name: "Durward",
        surname: "Roberts",
        advisor: {
            id: 68,
            name: "Meggie",
            surname: "Nolan",
            phone: 501079220,
            address: {
                id: 303,
                address: "5798 Goldner Roads Suite 894\nWest Alessia, OR 99956-7291"
            },
            role: {
                id: 66,
                name: "Role consequuntur"
            }
        },
        category: {
            id: 66,
            name: "Student Category mollitia"
        },
        course: {
            id: 69,
            name: "Course voluptatibus"
        },
        status: {
            id: 69,
            name: "Status voluptatum"
        }
      }
    }
    
    // send call to API
    this.props.handleAddLease(newLease);
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
          <label className="inputContainer__label" htmlFor="duration">Duration</label>
          <select name="duration" id="duration" value={this.state.duration} autoFocus onChange={(event) => this.handleInputChange(event)} required>
            <option value={1}>1 semester</option>
            <option value={2}>2 semesters</option>
          </select>
        </div>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="start">start</label>
          <input className="inputContainer__input" type="date" id="start" name="start" onChange={(event) => this.handleInputChange(event)} required/>
        </div>

        <div className="inputContainer">
          <label className="inputContainer__label" htmlFor="end">end</label>
          <input className="inputContainer__input" type="date" id="end" name="end" onChange={(event) => this.handleInputChange(event)} required/>
        </div>
        
        <button className="form__button" type="submit">Add</button>

      </form>
    )
  }
}

export default LeasesForm;