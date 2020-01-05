import React from 'react';
import StudentsEdit from './StudentsEdit.js';

class StudentsItem extends React.Component {

  state = {
    moreOpen: false,
    editOpen: false
  }

  handleMoreOpen = () => {
    this.setState( prevState => (
      {
        moreOpen: !prevState.moreOpen
      }
    ))
  }

  handleEditOpen = () => {
    this.setState( prevState => (
      {
        editOpen: !prevState.editOpen
      }
    ))
  }

  render() {
    const { current } = this.props;
    return (
      <div className="list__item">
        <h2>Student</h2>
        <p><b>Name:</b> <span>{current.name} {current.surname}</span></p>
        <p><b>Category:</b> <span>{current.category.name}</span></p>
        <p><b>Course:</b> <span>{current.course.name}</span></p>
        <p><b>Status:</b> <span>{current.status.name}</span></p>
        <button className="delete" onClick={this.handleMoreOpen}>More</button>
        <button className="delete" onClick={this.handleEditOpen}>Edit</button>

        { this.state.editOpen && <StudentsEdit student={current} handleEditStudent={this.props.handleEditStudent} handleEditOpen={this.handleEditOpen}/> }
        
        { this.state.moreOpen && ( 
          <>
          <h2>Advisor</h2>
          <p><b>Name:</b><span>{current.advisor.name} {current.advisor.surname}</span></p>
          <p><b>Phone:</b><span>{current.advisor.phone}</span></p>
          <p><b>Address:</b><span>{current.advisor.address.address}</span></p>
          <p><b>Role:</b><span>{current.advisor.role.name}</span></p>
          {/* <button className="delete" onClick={() => this.handleDelete(current.id)}>Delete</button> */}
          </>
        )}
        
        <button className="delete" onClick={() => this.props.handleDelete(current.id)}>Delete</button>
      </div>
    )
  }
};

export default StudentsItem;