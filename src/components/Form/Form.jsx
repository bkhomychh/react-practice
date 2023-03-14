import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    avatar: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      ...this.state,
    };
    this.props.addUser(newUser);
    this.props.closeForm();
  };

  render() {
    const { name, email, avatar } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Avatar:
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
