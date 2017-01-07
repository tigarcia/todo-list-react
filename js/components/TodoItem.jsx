import React, {Component} from 'react'

export default class TodoItem extends Component {
  constructor(props, title, description, id, onEdit, onDelete) {
    super(props);
    this.title = title;
    this.description = description;
    this.id = id;

    this.onEdit = this.props.onEdit.bind(this);
    this.onDelete = this.props.onDelete.bind(this);
  }

  handleClick() {
    console.log("Clicked");
  }

  render() {
    return (
      <li key={this.props.id}>
        <button onClick={() => this.onDelete()}>X</button>
        <button onClick={() => this.onEdit()}>Edit</button>
        {this.props.title} - {this.props.description}
      </li>
    );
  }
}