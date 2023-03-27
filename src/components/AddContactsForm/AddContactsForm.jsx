import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input } from './AddContactsForm.styled';
import { Button } from 'components/Button/Button';

export class AddContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit({...this.state});
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '',number: '', });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={nanoid()}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={nanoid()}
        />

        <Label htmlFor={nanoid()}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={nanoid()}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

AddContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
