import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadItems, deleteItem } from '../actions/toyActions'
import ToyList from '../cmps/ToyList'
import ToyFilter from '../cmps/ToyFilter';



class ToyApp extends Component {

  componentDidMount() {
    this.props.loadItems();
  }


  onDelete = (id) => {
    this.props.deleteItem(id);
  }


  render() {
    return <React.Fragment>
      <div className="container">
        <div className="header"></div>
        <ToyList onDelete={this.onDelete} toys={this.props.toys} />
      </div>
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    toys: state.items
  };
};

const mapDispatchToProps = {
  loadItems,
  deleteItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToyApp);