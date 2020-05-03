import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';


export default class ToyPreview extends Component {

  onDelete = () => {
    this.props.onDelete(this.props.toy._id)
  }

  render() {
    const { toy } = this.props
    return <React.Fragment>
      <div className="toys-container-card">
        <h2>{toy.name}</h2>
        <h3>Price: {toy.price}</h3>
        <h4>{toy.inStock ? 'This product is on Stock' : 'This product is not on stock'}</h4>
        <img src={toy.img} alt="toyimg" />
        <p>Created at: {toy.createdAt}</p>
        <div className="btns">
          <button onClick={this.onDelete}><DeleteOutlineIcon style={{ fontSize: 30 }} /></button>
          <Link to={`/toyedit/${toy._id}`}><button><EditIcon style={{ fontSize: 30 }} /></button></Link>
        </div>
      </div>

    </React.Fragment>
  }

}


