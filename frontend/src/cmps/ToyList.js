import React from 'react'
import ToyPreview from '../cmps/ToyPreview'

export default function ToyList(props) {
  return <div className="toys-container">{props.toys.map((toy,i) =><ToyPreview onDelete={props.onDelete} key={toy._id} toy={toy}></ToyPreview>)}</div>
}
