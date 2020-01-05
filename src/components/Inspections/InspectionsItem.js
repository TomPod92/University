import React from 'react';
import InspectionsEdit from './InsepctionsEdit.js';

class InspectionsItem extends React.Component {
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
      <div key={current.id} className="list__item">
        <h2>Inspection</h2>
        <p><b>Date:</b> <span>{current.date}</span></p>
        <p><b>Well Maintained:</b> <span>{current.wellMaintained ? 'yes' : 'no'}</span></p>
        <p><b>Comments:</b> <span>{current.comments}</span></p>
        <button className="delete" onClick={this.handleMoreOpen}>More</button>
        <button className="delete" onClick={this.handleEditOpen}>Edit</button>

        { this.state.editOpen && <InspectionsEdit inspection={current} handleEditInspection={this.props.handleEditInspection} handleEditOpen={this.handleEditOpen}/>}

        { this.state.moreOpen && (
          <>
          <h2>Place</h2>
          <p><b>Place number:</b> <span>{current.place.placeNumber}</span></p>
          <p><b>Place rent:</b> <span>{current.place.rentrate}</span></p>
          <h2>Staff</h2>
          <p><b>Name:</b> <span>{current.staff.name} {current.staff.surname}</span></p>
          <p><b>Phone:</b> <span>{current.staff.phone}</span></p>
          <p><b>Address:</b> <span>{current.staff.address.address}</span></p>
          <p><b>Role:</b> <span>{current.staff.role.name}</span></p>
          {/* <button className="delete" onClick={() => this.handleDelete(current.id)}>Delete</button> */}
          </>
        )}

        <button className="delete" onClick={() => this.props.handleDelete(current.id)}>Delete</button>
      </div>
    )
  }
};

export default InspectionsItem;