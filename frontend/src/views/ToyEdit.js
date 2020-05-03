import React from 'react'
import { Component } from "react";
import { connect } from 'react-redux';
import { saveItem, getItemById } from '../actions/toyActions';

//form control - UI component
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ToyEdit extends Component {

  state = {
    onAdd: false,
    toy: {
      _id: '',
      name: '',
      img: '',
      price: '',
      type: '',
      createdAt: '',
      inStock: ''
    }
  }



  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) {
      this.setState({ onAdd: true })
      return
    }

    this.props.getItemById(id)
      .then(res => {
        this.setState({ toy: res.toy })
      })
  }


  componentDidUpdate(prevProps) {
    if (prevProps.currentToy !== this.props.currentToy) {
      this.setState({ toy: this.props.currentToy })
    }
  }

  onSave = () => {
    this.props.saveItem(this.state.toy)
      .then(_ => {
        console.log('toy saved - go home');
        this.props.history.push('/')
      })
  }


  inputChange = (ev) => {
    let field = ev.target.name
    let val = ev.target.value
    this.setState(prev => {
      return {
        ...prev,
        toy: { ...prev.toy, [field]: val }
      }
    })
  }

  toggleOnStock = () => {
    this.setState(prev => {
      return {
        ...prev,
        toy: { ...prev.toy, inStock: (this.state.toy.inStock) ? false : true }
      }
    })
  }

  render() {
    // console.log(this.state.toy);

    if (!this.state.toy) return <h1>Loading..</h1>
    const { toy } = this.state

    return <React.Fragment>
      <div className="form-container container">
        <form className="form-inputs">
          <TextField name="name" label="Toy Name" type="text" variant="outlined" value={toy.name} onChange={this.inputChange} />
          <TextField name="price" label="Price" type="number" variant="outlined" value={toy.price} onChange={this.inputChange} />
          <TextField id="outlined-number" name="img" label="Image URL" type="text" variant="outlined" value={toy.img} onChange={this.inputChange} />

          on Stock <Switch checked={toy.inStock} onChange={this.toggleOnStock}></Switch>

          <FormControl variant="outlined"><InputLabel>Type</InputLabel>
            <Select value={toy.type} name="type" onChange={this.inputChange} >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={"funny"}>Funny</MenuItem>
              <MenuItem value={"Adult"}>Adult</MenuItem>
              <MenuItem value={"Family"}>Family</MenuItem>
              <MenuItem value={"Intelligente"}>Intelligente</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" size="small" onClick={this.onSave} > Save  </Button>
        </form>
      </div>
    </React.Fragment>
  }

}


const mapStateToProps = state => {
  return {
    currentToy: state.currentToy
  };
};

const mapDispatchToProps = {
  saveItem, getItemById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToyEdit);

