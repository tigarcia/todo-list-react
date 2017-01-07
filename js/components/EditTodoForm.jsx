import React, {Component} from 'react'

export default class EditTodoForm extends Component {
  constructor(props, id, title, description, onSubmit) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.title, this.state.description);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
            Description <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    );
  }
}